export default async function handler(req, res) {
  // return a promise to avoid stalled requests
  return new Promise((resolve) => {
    const { user, bot } = req.query;
    async function getUserInfo() {
      // try fetching from my selfhosted bot
      let rawUserInfo /*= await fetch(
        `https://discord-md-badge.ashmonty.com/md-shield/${
          bot ? "bot/" : ""
        }json?u=${user}`
      );
      // If that fails, try fetching from my droplet
      if (!rawUserInfo.ok) {*/
        rawUserInfo = await fetch(
          `http://167.71.241.147:3581/md-shield/${
            bot ? "bot/" : ""
          }json?u=${user}`
        );
      //}

      const userInfo = await rawUserInfo.json();
      res.status(200).send(await userInfo);
    }

    // call the function and resolve the promise
    getUserInfo().then(() => {
      resolve;
    });
  });
}
