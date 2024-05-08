import "dotenv/config";

export default async function fetchServerInfo(invite) {
  // https://github.com/discordjs/discord.js/blob/e673b3c129f288f9f271e0b991d16dc2901cdc8a/packages/discord.js/src/structures/Invite.js#L21C3-L21C104
  const inviteRegex =
    /discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/(?<code>[\w-]{2,255})/i;

  const inviteID = inviteRegex.exec(invite)?.groups?.code ?? invite;

  const serverFetch = await fetch(
    `https://discord.com/api/v10/invites/${inviteID}?with_counts=true&with_expiration=true`,
    {
      headers: {
        authentication: `Bot ${process.env.DC_TOKEN}`,
      },
    }
  );

  if (!serverFetch.ok) {
    return {
      error: "fetch error",
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
