export default async function handler(req, res) {
  // return a promise to avoid stalled requests
  return new Promise((resolve) => {
    const { user, bot } = req.query;
    async function getUserInfo() {
      // try fetching from my home server
      let rawUserInfo = await fetch(
        `https://discord-md-badge.ashmonty.com/md-shield/${
          bot ? "bot/" : ""
        }json?u=${user}`
      ).catch((e) => console.error("[err]", e, Date.now()));
      // If that fails, try fetching from my droplet
      if (rawUserInfo.status !== 200 && rawUserInfo.status !== 418) {
        console.warn("[warn] using droplet", Date.now());
        rawUserInfo = await fetch(
          `http://167.71.241.147:3581/md-shield/${
            bot ? "bot/" : ""
          }json?u=${user}`
        ).catch((e) => console.error("[err]", e, Date.now()));
      }
      const userInfo = await rawUserInfo.json();
      res.status(200).send(await userInfo);
    }

    // call the function and resolve the promise
    getUserInfo().then(() => {
      resolve;
    });
  });
}
