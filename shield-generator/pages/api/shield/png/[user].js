const { convert } = require("convert-svg-to-png");

export default async function handler(req, res) {
  // We have to return a promise. otherwise we get stalled requests since the API resolves without sending a response
  return new Promise((resolve) => {
    async function convertShield(userID, style) {
      style = style || "for-the-badge";
      const rawShield = await fetch(
        `https://discord-md-badge.vercel.app/api/shield/${userID}?style=${style}`
      );

      const svgShield = await rawShield.text();

      const pngShield = await convert(svgShield);

      res.setHeader("Content-Type", "image/png");
      res.send(pngShield);
    }

    convertShield(req.query.user, req.query.style).then(() => {
      resolve;
    });
  });
}
