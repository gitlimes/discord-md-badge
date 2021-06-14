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
        logoColor = "7289da";
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
