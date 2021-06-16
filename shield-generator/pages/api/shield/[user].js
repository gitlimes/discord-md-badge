export default async function handler(req, res) {
  // We have to return a promise. otherwise we get stalled requests since the API resolves without sending a response
  return new Promise((resolve) => {
    // This function gets the user information from the Discord API
    async function getUserInfo(userID) {
      const rawUserInfo = await fetch(
        `http://167.71.241.147:3581/md-shield/json/?u=${userID}`
      );

      const userInfo = await rawUserInfo.json();
      return userInfo;
    }

    // This function gets the shield from shields.io and returns it
    async function makeShield(t, p) {
      let logoColor;

      if (req.query.logoColor) {
        if (req.query.logoColor === "presence") {
          logoColor = await getPresenceColor();
        } else {
          logoColor = req.query.logoColor;
        }
      } else {
        if (req.query.style === "social") {
          logoColor = "#5865F2";
        } else {
          logoColor = "white";
        }
      }

      // This function replaces the selected color with one depending on the presence information
      async function getPresenceColor() {
        switch (p) {
          case "online": {
            return "37b05d";
          }
          case "idle": {
            return "faa81a";
          }
          case "do not disturb": {
            return "ed4245";
          }
          default: {
            return "555";
          }
        }
      }

      // presenceTheme is present for legacy purposes, theme should be used instead
      let theme = req.query.presenceTheme || req.query.theme;

      let rightColor, leftColor;

      // This is where the whole theming thing takes place!
      switch (theme) {
        default:
          {
            rightColor = "555";
            leftColor = "7289da";
          }
          break;
        case "default-inverted":
          {
            leftColor = "555";
            rightColor = "7289da";
          }
          break;
        case "clean":
          {
            leftColor = "555";
            rightColor = await getPresenceColor();
          }
          break;
        case "clean-inverted":
          {
            leftColor = await getPresenceColor();
            rightColor = "555";
          }
          break;

        case "dc":
        case "discord":
          {
            leftColor = "7289da";
            rightColor = await getPresenceColor();
          }
          break;
        case "dc-inverted":
        case "discord-inverted":
          {
            leftColor = await getPresenceColor();
            rightColor = "7289da";
          }
          break;
        case "full":
        case "full-presence":
          {
            leftColor = await getPresenceColor();
            rightColor = await getPresenceColor();
          }
          break;
        case "gray":
        case "grey":
          {
            leftColor = "555";
            rightColor = "555";
          }
          break;
        case "blurple":
          {
            leftColor = "7289da";
            rightColor = "7289da";
          }
          break;
      }

      let shieldURL;

      if (req.query.compact === "true") {
        shieldURL = `https://img.shields.io/static/v1?label=&message=${encodeURIComponent(
          t
        )}&style=${
          req.query.style || "for-the-badge"
        }&color=${rightColor}&labelColor=${leftColor}&logo=discord&logoColor=${logoColor}`;
      } else {
        shieldURL = `https://img.shields.io/static/v1?label=${encodeURIComponent(
          t
        )}&message=${encodeURIComponent(p)}&style=${
          req.query.style || "for-the-badge"
        }&color=${rightColor}&labelColor=${leftColor}&logo=discord&logoColor=${logoColor}`;
      }

      const rawShield = await fetch(shieldURL);

      const svgShield = await rawShield.text();

      /* The for-the-badge style makes the username uppercase, and we don't want that since Discord usernames
       * are case sensitive; here we replace it with the correctly capitalized text */
      const usernameRegExp = new RegExp(`${t.toUpperCase()}`, "g");
      let svgShieldFix = svgShield.replace(usernameRegExp, t);

      // Here we make the username bold
      const boldRegEx = new RegExp(`fill="#fff">${t}</text>`, "g");
      svgShieldFix = svgShieldFix.replace(
        boldRegEx,
        `fill="#fff" font-weight="bold">${t}</text>`
      );

      res.setHeader("Content-Type", "image/svg+xml");
      res.status(200).send(svgShieldFix);
    }

    // We call all the functions and finally resolve the promise we created at the beginning
    getUserInfo(req.query.user).then((userInfo) => {
      makeShield(userInfo.t, userInfo.p).then(() => {
        resolve;
      });
    });
  });
}
