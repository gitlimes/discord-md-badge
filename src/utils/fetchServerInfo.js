export default async function fetchServerInfo(invite) {
  try {
    const serverFetch = await fetch(
      `https://discord.com/api/v9/invites/${invite}?with_counts=true&with_expiration=true`
    );

    const server = await serverFetch.json();

    if (server.code == 10006) {
      return {
        error: "Invalid invite",
      };
    } else {
      return {
        name: server.guild.name,
        memberCount: server.approximate_member_count,
      };
    }
  } catch (e) {
    console.error(e);
  }
}
