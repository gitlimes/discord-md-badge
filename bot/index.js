const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");

const app = express();
const port = 3581;

client.login(process.env.DC_TOKEN);

function getUserInfo(req, res, isBot) {
  const userID = req.query.u;

  // If the user is a bot, we check the bot server, else the regular server. The GUILD_ID env var overrides this
  const guildID =
    process.env.GUILD_ID || isBot ? "867345122941337610" : "852978546187698206";

  const guild = client.guilds.cache.get(guildID);

  // We check if the user is in the server (https://discord.gg/zkspfFwqDg)
  if (guild.member(userID)) {
    const user = client.users.cache.get(userID);
    let presence = user.presence.status;
    const tag = user.tag;

    // If the presence is dnd we rename it to do not disturb
    if (presence === "dnd") {
      presence = "do not disturb";
    }

    res.status(200).json({ t: tag, p: presence });
  } else {
    // If the user isn't in the guild, we tell them to join, since we can't get the info otherwise
    res.status(200).json({
      t: "Error",
      p: "You have to join the Discord server (https://discord.gg/zkspfFwqDg) for this to work.",
    });
  }
}

app.get("/md-shield/json/", (req, res) => {
  getUserInfo(req, res);
});

app.get("/md-shield/bot/json/", (req, res) => {
  getUserInfo(req, res, true);
});

client.on("ready", () => {
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
});