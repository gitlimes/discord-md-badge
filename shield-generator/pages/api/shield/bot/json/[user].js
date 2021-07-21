export default async function handler(req, res) {
  // We have to return a promise. otherwise we get stalled requests since the API resolves without sending a response
  return new Promise((resolve) => {
    async function getUserInfo(userID) {
      const rawUserInfo = await fetch(
        `http://localhost:3581/md-shield/bot/json/?u=${userID}`
      );

      const userInfo = await rawUserInfo.json();
      res.status(200).send(await userInfo);
    }

    getUserInfo(req.query.user).then(() => {
      resolve;
    });
  });
}
