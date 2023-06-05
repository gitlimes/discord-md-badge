export default async function handler(req, res) {
  // return a promise to avoid stalled requests
  return new Promise((resolve) => {
    const { user, bot } = req.query;
    async function getUserInfo() {
      let rawUserInfo = await fetch(
        `https://discord-md-badge.limes.pink/md-shield/${bot ? "bot/" : ""
        }json?u=${user}`
      ).catch((e) => console.error("[err]", e, Date.now()));

      const userInfo = await rawUserInfo.json();
      res.status(200).send(await userInfo);
    }

    // call the function and resolve the promise
    getUserInfo().then(() => {
      resolve;
    });
  });
}
