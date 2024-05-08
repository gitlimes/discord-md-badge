import "dotenv/config";

export default async function fetchUserStatus(discordClient, userID, bot) {
  try {
    // if the user is a bot, we fetch it in the bot guild; if not, we check in the public one.
    const guildID =
      process.env.GUILD_ID || bot ? "867345122941337610" : "852978546187698206";

    const guild = await discordClient.guilds.cache.get(guildID);

    const member = await guild.members.fetch({
      user: userID,
      force: true,
      withPresences: true,
    });

    if (Object.keys(member).length === 0) {
      throw new Error("member not found");
    }

    let { username, discriminator } = await member.user;

    // discriminators are still a thing for bots, dunno about users.
    if (Number(discriminator)) {
      username = `${username}#${discriminator}`;
    } else {
      username = `@${username}`;
    }

    const { status } = await member.presence;

    const userInfo = {
      username,
      status: status.replace("dnd", "do not disturb"),
    };

    return userInfo;
  } catch (e) {
    return {
      error: "member not found",
    };
  }
}
