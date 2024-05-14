import "dotenv/config";

import NodeFetchCache, { FileSystemCache } from "node-fetch-cache";

const fetch = NodeFetchCache.create({
  shouldCacheResponse: (response) => response.ok,
  cache: new FileSystemCache({ ttl: 4 * 3600000 }), // 4 hours.
});

export default async function fetchServerInfo(invite) {
  // https://github.com/discordjs/discord.js/blob/e673b3c129f288f9f271e0b991d16dc2901cdc8a/packages/discord.js/src/structures/Invite.js#L21C3-L21C104
  const inviteRegex =
    /discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/(?<code>[\w-]{2,255})/i;

  const inviteID = inviteRegex.exec(invite)?.groups?.code ?? invite;

  const serverFetch = await fetch(
    `${process.env.FETCH_PROXY_URL}https://discord.com/api/v10/invites/${inviteID}?with_counts=true&with_expiration=true`,
    {
      headers: {
        authentication: `Bot ${process.env.DC_TOKEN}`,
        origin: process.env.FETCH_PROXY_ORIGIN_HEADER,
        "User-Agent":
          "discord-md-badge (https://github.com/gitlimes/discord-md-badge, v2.0.0)",
      },
    }
  );

  if (!serverFetch.ok) {
    return {
      error: `fetch error, potentially ratelimited?\ncode: ${serverFetch.status}`,
    };
  }

  const server = await serverFetch.json();

  if (server.code === inviteID) {
    return {
      name: server.guild.name,
      memberCount: server.approximate_member_count,
    };
  } else {
    if (server.retry_after) {
      return {
        error: "rate limited",
      };
    } else {
      return {
        error: "invalid invite",
      };
    }
  }
}
