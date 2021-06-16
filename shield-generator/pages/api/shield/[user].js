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
      let logoColor = "white";

      if (req.query.style === "social") {
        logoColor = "#5865F2";
      }

      console.log(
        `https://img.shields.io/static/v1?label=${encodeURIComponent(
          t
        )}&message=${encodeURIComponent(p)}&style=${
          req.query.style || "for-the-badge"
        }&color=00ff00&logo=discord&logoColor=${logoColor}`
      );

      const rawShield = await fetch(
        `https://img.shields.io/static/v1?label=${encodeURIComponent(
          t
        )}&message=${encodeURIComponent(p)}&style=${
          req.query.style || "for-the-badge"
        }&color=00ff00&logo=discord&logoColor=${logoColor}`
      );

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

      // These are regular expressions that "find" the background color of the left and right section respectively
      const leftBgRegEx = new RegExp(`fill="#555"`, "g");
      const rightBgRegEx = new RegExp(`fill="#00ff00"`, "g");

      // This function replaces the selected color with one depending on the presence information
      function replaceWithPresenceColor(regEx) {
        switch (p) {
          case "online":
            {
              svgShieldFix = svgShieldFix.replace(regEx, `fill="#37b05d"`);
            }
            break;
          case "idle":
            {
              svgShieldFix = svgShieldFix.replace(regEx, `fill="#faa81a"`);
            }
            break;
          case "do not disturb":
            {
              svgShieldFix = svgShieldFix.replace(regEx, `fill="#ED4245"`);
            }
            break;
          default: {
            svgShieldFix = svgShieldFix.replace(regEx, `fill="#555"`);
          }
        }
      }

      // Some more theming options!
      switch (req.query.presenceTheme) {
        case "full":
          {
            replaceWithPresenceColor(leftBgRegEx);
            replaceWithPresenceColor(rightBgRegEx);
          }
          break;
        case "dc":
          {
            replaceWithPresenceColor(rightBgRegEx);
            svgShieldFix = svgShieldFix.replace(leftBgRegEx, `fill="#7289da"`);
          }
          break;
        case "dc-inverted":
          {
            replaceWithPresenceColor(leftBgRegEx);
            svgShieldFix = svgShieldFix.replace(rightBgRegEx, `fill="#7289da"`);
          }
          break;
        case "clean":
          {
            replaceWithPresenceColor(rightBgRegEx);
            svgShieldFix = svgShieldFix.replace(leftBgRegEx, `fill="#555"`);
          }
          break;
        case "clean-inverted":
          {
            replaceWithPresenceColor(leftBgRegEx);
            svgShieldFix = svgShieldFix.replace(rightBgRegEx, `fill="#555"`);
          }
          break;

        default: {
          svgShieldFix = svgShieldFix.replace(leftBgRegEx, `fill="#7289da"`);
          svgShieldFix = svgShieldFix.replace(rightBgRegEx, `fill="#555"`);
        }
      }

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
