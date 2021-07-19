<h1 style="text-align: center">Discord Profile Markdown badge</h1>

Add to your GitHub readme a badge that shows your Discord username and presence!

![](https://discord-md-badge.vercel.app/api/shield/852977967776399400)

## Set up

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Add to your readme

   `![](https://discord-md-badge.vercel.app/api/shield/USERID)`

   replacing `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/852977967776399400)`)

Done! (Make sure not to leave the server, or this will break)

### HTML
The API returns an SVG image, so you can embed it in your html just like you would with a regular image by doing

```html
<img src="https://discord-md-badge.vercel.app/api/shield/USERID" />
```

## Styling

You can chain parameters by connecting them with `&` (e.g. `?style=flat&theme=clean&compact=true`).

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

In the following themes the green color gets replaced by the color corresponding to your presence (green, yellow, red, and grey, for online, idle, do not disturb, and offline, respectively)
| Badge | Theme | Query |
| :------------------------------------------------------------------------------------------------------------ | :--------------- | :------------------------ |
| ![default](https://discord-md-badge.vercel.app/api/shield/852977967776399400) | Default | None (default) |
| ![default-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=default-inverted) | Default inverted | `?theme=default-inverted` |
| ![clean](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=clean) | Clean | `?theme=clean` |
| ![clean-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=clean-inverted) | Clean inverted | `?theme=clean-inverted` |
| ![dc](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=discord) | Discord | `?theme=discord` |
| ![dc-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=discord-inverted) | Discord inverted | `?theme=discord-inverted` |
| ![full-presence](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=full-presence) | Full presence | `?theme=full-presence` |
| ![grey](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=grey) | Grey | `?theme=grey` |
| ![blurple](https://discord-md-badge.vercel.app/api/shield/852977967776399400?theme=blurple) | Blurple | `?theme=blurple` |

Note: the `theme` option will not work with the social `style`.

### `compact`

| Badge                                                                                      | Query           |
| :----------------------------------------------------------------------------------------- | :-------------- |
| ![compact](https://discord-md-badge.vercel.app/api/shield/852977967776399400?compact=true) | `?compact=true` |

### `logoColor`

You can pass a color for the logo (the examples below also use `&theme=default-inverted` to show the color better)

| Badge                                                                                                                    | Query                 | Description                                             |
| :----------------------------------------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------------------------ |
| ![presence](https://discord-md-badge.vercel.app/api/shield/852977967776399400?logoColor=presence&theme=default-inverted) | `?logoColor=presence` | Changes the color of the logo according to the presence |
| ![word](https://discord-md-badge.vercel.app/api/shield/852977967776399400?logoColor=orange&theme=default-inverted)       | `?logoColor=orange`   | Supported colors [here](https://shields.io/#colors)     |
| ![hex](https://discord-md-badge.vercel.app/api/shield/852977967776399400?logoColor=ae81ce&theme=default-inverted)        | `?logoColor=ae81ce`   | Any hex code, without the `#`                           |

## Endpoints

(Preceded by `https://discord-md-badge.vercel.app/api`)

| Endpoint              | Description                                       | Example response                                                                  |
| :-------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------- |
| `/shield/USERID`      | returns a shield in the SVG format                | ![](https://discord-md-badge.vercel.app/api/shield/852977967776399400?style=flat) |
| `/shield/json/USERID` | returns the raw JSON used to generate the shields | `{ "t": "MDbot#9808", "p": "online" }`                                 |
