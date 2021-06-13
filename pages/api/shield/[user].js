const Discord = require("discord.js");
const client = new Discord.Client();

export default async function handler(req, res) {
  // We have to return a promise. otherwise we get stalled requests since the API resolves without sending a response
  return new Promise((resolve) => {
    // This function gets the shield from shields.io and returns it
    async function getShield(t, p) {
      let logoColor = "white";

      if (req.query.style === "social") {
        logoColor = "7289da";
      }

      const rawShield = await fetch(
        `https://img.shields.io/static/v1?label=${encodeURIComponent(
          t
        )}&message=${encodeURIComponent(p)}&style=${
          req.query.style || "for-the-badge"
        }&color=00ff00&logo=discord&logoColor=${logoColor}`
      );

      const svgShield = await rawShield.text();

      /* The for-the-badge style makes the username uppercase, and we don't want that since Discord usernames
       * are case sensitive; here we replace it with the correctly capitalized text and we make it bold in the process */
      const usernameRegExp = new RegExp(`${t.toUpperCase()}`, "g");
      let svgShieldFix = svgShield.replace(usernameRegExp, t);

      // This is some hot garbage to make the left portion Discord themed
      const greyReplaceRegEx = new RegExp(`fill="#555"`, "g");
      svgShieldFix = svgShieldFix.replace(greyReplaceRegEx, `fill="#7289da"`);

      // And this is some more hot garbage to make the right portion the default grey color
      const greenReplaceRegEx = new RegExp(`fill="#00ff00"`, "g");
      svgShieldFix = svgShieldFix.replace(greenReplaceRegEx, `fill="#555"`);

      // This is gonna blow your mind: this is some more jank to make the username bold
      const boldRegEx = new RegExp(`fill="#fff">${t}</text>`, "g");
      svgShieldFix = svgShieldFix.replace(
        boldRegEx,
        `fill="#fff" font-weight="bold">${t}</text>`
      );

      return svgShieldFix;
    }

    // This function gets the user information from the Discord API
    async function getUserInfo(userID) {
      // This makes it easier to deploy this to Vercel without needing to edit the code manually
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

        // Here we set the correct content-type header and return the shield
        res.setHeader("Content-Type", "image/svg+xml");
        getShield(tag, presence).then((shield) => {
          res.status(200).send(shield);
        });
      } else {
        // If the user isn't in the guild, we tell them to join, since we can't get the info otherwise
        res.status(418).json({
          t: "Error",
          p: "You have to join the Discord server (https://discord.gg/zkspfFwqDg) for this to work.",
        });
      }
    }

    // Here we set up the Discord client and call the functions to get the user information
    async function discordClient(userID) {
      client.login(process.env.DC_TOKEN);
      // Check if the client is ready; if not, we wait for it to be
      if (client.readyAt !== null) {
        getUserInfo(userID);
      } else {
        // We wait for the client to be ready
        client.on("ready", () => {
          getUserInfo(userID);
        });
      }
    }

    // We call the discordClient function and finally resolve the promise we created at the beginning
    discordClient(req.query.user).then(() => {
      resolve;
    });
  });
}
