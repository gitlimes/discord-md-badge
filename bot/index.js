const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");

const app = express();
const port = 3581;

client.login(process.env.DC_TOKEN);

app.get("/md-shield/json/", (req, res) => {
  const userID = req.query.u;

  // This makes it easier to deploy this without needing to edit the code manually
  const guildID = process.env.GUILD_ID || "852978546187698206";

  const guild = client.guilds.cache.get(guildID);

  // We check if the user is in the server (https://discord.gg/zkspfFwqDg)
  if (guild.member(userID)) {
    const user = client.users.cache.get(userID);
    let presence = user.presence.status;
    const tag = user.tag;

    // If the presence is dnd we rename it to Do Not Disturb
    if (presence === "dnd") {
      presence = "do not disturb";
    }

    res.status(200).json({ t: tag, p: presence });
  } else {
    // If the user isn't in the guild, we tell them to join, since we can't get the info otherwise
    res.status(418).json({
      t: "Error",
      p: "You have to join the Discord server (https://discord.gg/zkspfFwqDg) for this to work.",
    });
  }
});

app.get("/md-shield/bot/json/", (req, res) => {
  const userID = req.query.u;

  // This makes it easier to deploy this without needing to edit the code manually
  const guildID = process.env.GUILD_ID || "867345122941337610";

  const guild = client.guilds.cache.get(guildID);

  // We check if the bot is in the bot server (private)
  if (guild.member(userID)) {
    const user = client.users.cache.get(userID);
    let presence = user.presence.status;
    const tag = user.tag;

    // If the presence is dnd we rename it to Do Not Disturb
    if (presence === "dnd") {
      presence = "do not disturb";
    }

    res.status(200).json({ t: tag, p: presence });
  } else {
    // If the bot isn't in the guild, we tell the dev to send me the invite, since we can't get the info otherwise
    res.status(418).json({
      t: "Error",
      p: "For this to work, you need to DM me (montylion#3581) the invite for your bot.",
    });
  }
});

client.on("ready", () => {
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
});
