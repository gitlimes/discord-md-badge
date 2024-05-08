import "dotenv/config";

export default async function fetchServerInfo(invite) {
  const serverFetch = await fetch(
    `https://discord.com/api/v10/invites/${invite}?with_counts=true&with_expiration=true`,
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

  if (server.code === invite) {
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
