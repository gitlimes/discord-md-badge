<h1 style="text-align: center">Discord Profile Markdown badge</h1>

Add to your GitHub readme a badge that shows your Discord username and presence!

![](https://discord-md-badge.vercel.app/api/shield/852977967776399400)

## Set up

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Add to your readme

   `![](https://discord-md-badge.vercel.app/api/shield/USERID)`

   replacing `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/852977967776399400)`)

Done! (Make sure not to leave the server, or this will break)

## Styling

### `style`

This uses [shields.io](https://shields.io) to generate the badge, so you can choose one of the styles from there by appending `?style=` to the url.

| Badge                                                                                               | Style         | Query                |
| :-------------------------------------------------------------------------------------------------- | :------------ | :------------------- |
| ![flat](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=flat)               | flat          | `?style=flat`        |
| ![flat-square](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=flat-square) | flat-square   | `?style=flat-square` |
| ![for-the-badge (default)](https://discord-md-badge.vercel.app/api/shield/852977967776399400)       | for-the-badge | None (default)       |
| ![plastic](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=plastic)         | plastic       | `?style=plastic`     |
| ![social](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=social)           | social        | `?style=social`      |

### `theme`

You can also use the `theme` query option to change the colors of the shield

| Badge                                                                                                         | Theme            | Description                                                                                           | Query                     |
| :------------------------------------------------------------------------------------------------------------ | :--------------- | :---------------------------------------------------------------------------------------------------- | :------------------------ |
| ![default](https://discord-md-badge.vercel.app/api/shield/852977967776399400)                                 | Default          | The left part is blurple, the right one is grey                                                       | None (default)            |
| ![default-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=default-inverted) | Default inverted | The left part is grey, the right one is blurple                                                       | `?theme=default-inverted` |
| ![full-presence](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=full-presence)       | Full presence    | The color of the entire shield changes depending on your presence                                     | `?theme=full-presence`    |
| ![clean](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=clean)                       | Clean            | The color of the right part changes depending on your presence, while the left part is always grey    | `?theme=clean`            |
| ![clean-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=clean-inverted)     | Clean inverted   | The color of the left part changes depending on your presence, while the right part is always grey    | `?theme=clean-inverted`   |
| ![dc](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=discord)                        | Discord          | The color of the right part changes depending on your presence, while the left part is always blurple | `?theme=discord`          |
| ![dc-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=discord-inverted)      | Discord inverted | The color of the left part changes depending on your presence, while the right part is always blurple | `?theme=discord-inverted` |
| ![grey](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=grey)                         | Grey             | The entire shield is grey                                                                             | `?theme=grey`             |
| ![blurple](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=blurple)                   | Blurple          | The entire shield is blurple                                                                          | `?theme=blurple`          |

The `theme` option can be used in conjunction with the `style` option by simply chaining the queries (e.g. `?style=flat&theme=clean`).

Note: the `theme` option will not work with the social `style`.

## Endpoints

(Preceded by `https://discord-md-badge.vercel.app/api`)

| Endpoint              | Description                                       | Example response                                                                  |
| :-------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------- |
| `/shield/USERID`      | returns a shield in the SVG format                | ![](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=flat) |
| `/shield/json/USERID` | returns the raw JSON used to generate the shields | `{ "t": "Discord MD badge#9808", "p": "online" }`                                 |
