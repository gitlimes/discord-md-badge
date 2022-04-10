<h1 style="text-align: center">Discord Profile Markdown badge</h1>

Add to your GitHub readme a badge that shows your Discord username and presence!

![](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true)

## Set up

The set up process will vary depending on what type of account you want to monitor:

### User account

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Add to the readme

   `![](https://discord-md-badge.vercel.app/api/shield/USERID)`

   replacing `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)`)

![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)

Done! (Make sure not to leave the server, or this will break)

### Bot account

1. DM me (![](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat&compact=true)) your bot's invite link
2. Add to the readme

   `![](https://discord-md-badge.vercel.app/api/shield/BOTID?bot=true)`

   replacing `BOTID` with [your Discord bot's user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true)`)

![](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true)

Done!

## HTML

The API returns an SVG image, so you can embed it in your html just like you would with a regular image by doing

```html
<img src="https://discord-md-badge.vercel.app/api/shield/USERID" />
```

## Styling

You can chain parameters by connecting them with `&` (e.g. `?style=flat&theme=clean&compact=true`).

### `style`

This uses [shields.io](https://shields.io) to generate the badge, so you can choose one of the styles from there by appending `?style=` to the url.

| Badge                                                                                                        | Style         | Query                |
| :----------------------------------------------------------------------------------------------------------- | :------------ | :------------------- |
| ![flat](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&style=flat)               | flat          | `?style=flat`        |
| ![flat-square](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&style=flat-square) | flat-square   | `?style=flat-square` |
| ![for-the-badge (default)](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true)       | for-the-badge | None (default)       |
| ![plastic](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&style=plastic)         | plastic       | `?style=plastic`     |
| ![social](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&style=social)           | social        | `?style=social`      |

### `theme`

You can also use the `theme` query option to change the colors of the shield

In the following themes the green color gets replaced by the color corresponding to your presence (green, yellow, red, and grey, for online, idle, do not disturb, and offline, respectively)
| Badge | Theme | Query |
| :------------------------------------------------------------------------------------------------------------ | :--------------- | :------------------------ |
| ![default](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true) | Default | None (default) |
| ![default-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=default-inverted) | Default inverted | `?theme=default-inverted` |
| ![clean](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=clean) | Clean | `?theme=clean` |
| ![clean-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=clean-inverted) | Clean inverted | `?theme=clean-inverted` |
| ![dc](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=discord) | Discord | `?theme=discord` |
| ![dc-inverted](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=discord-inverted) | Discord inverted | `?theme=discord-inverted` |
| ![full-presence](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=full-presence) | Full presence | `?theme=full-presence` |
| ![grey](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=gray) | Gray | `?theme=gray` |
| ![blurple](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&theme=blurple) | Blurple | `?theme=blurple` |

Note: the `theme` option will not work with the social `style`.

### `compact`

| Badge                                                                                               | Query           |
| :-------------------------------------------------------------------------------------------------- | :-------------- |
| ![compact](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&compact=true) | `?compact=true` |

### `logoColor`

You can pass a color for the logo (the examples below also use `&theme=default-inverted` to show the color better)

| Badge                                                                                                                             | Query                 | Description                                             |
| :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------------------------ |
| ![presence](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=presence&theme=default-inverted) | `?logoColor=presence` | Changes the color of the logo according to the presence |
| ![word](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=pink&theme=default-inverted)         | `?logoColor=pink`     | Supported colors [here](https://shields.io/#colors)     |
| ![hex](https://discord-md-badge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=ff6b6b&theme=default-inverted)        | `?logoColor=ff6b6b`   | Any hex code, without the `#`                           |

## I've added this to my GitHub bio and it doesn't work!

This **won't** work in bios, only in profile readmes (and any other part of GitHub that supports markdown).
[Here](https://mansik16.medium.com/adding-a-readme-to-your-github-profile-2ec88bfedeb)'s some info on what a profile readme is and how to set it up.

For any questions feel free to contact me (![](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat&compact=true), [mdbadge@ashmonty.com](mailto:mdbadge@ashmonty.com))

## Endpoints

(Preceded by `https://discord-md-badge.vercel.app/api/shield`)

| Endpoint       | Description                                       | Example response                                                                  |
| :------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------- |
| `/USERID`      | returns a shield in the SVG format                | ![](https://discord-md-badge.vercel.app/api/shield/406125028065804289?style=flat) |
| `/json/USERID` | returns the raw JSON used to generate the shields | `{ "t": "monty#9398", "p": "online" }`                                            |

The above endpoints are also valid for bots, by adding the `?bot=true` query parameter
