export default async function fetchServerInfo(invite) {
  const serverFetch = await fetch(
    `https://discord.com/api/v9/invites/${invite}?with_counts=true&with_expiration=true`
  );

  const server = await serverFetch.json();

  if (server.code === invite) {
    return {
      name: server.guild.name,
      memberCount: server.approximate_member_count,
    };
  } else {
    return {
      error: "Invalid invite",
    };
  }
}
