<h1 style="text-align: center">Discord Markdown badge</h1>

A customizable Discord badge that shows your Discord account, a server invite, or a bot account.

| [User account](#user-account) | [Server invite](#server-invite) | [Bot account](#bot-account) |
|:-:|:-:|:-:|
| ![](https://dcbadge.vercel.app/api/shield/406125028065804289) | [![](https://dcbadge.vercel.app/api/server/zkspfFwqDg)](https://discord.gg/zkspfFwqDg) | ![](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true) | 

## Set up

The set up process will vary depending on the use:

### User account&nbsp;&nbsp;&nbsp;![](https://dcbadge.vercel.app/api/shield/406125028065804289)

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Your shield will become available at `https://dcbadge.vercel.app/api/shield/USERID`
<br>(replace `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))

To embed it in the readme, insert it like this:
<br>`![](https://dcbadge.vercel.app/api/shield/USERID)`

### Server invite&nbsp;&nbsp;&nbsp;([![](https://dcbadge.vercel.app/api/server/zkspfFwqDg)](https://discord.gg/zkspfFwqDg))

1. Create an invite for your server; make sure to disable expiration!
2. Your shield will become available at `https://dcbadge.vercel.app/api/server/INVITEID`
<br>(replace `INVITEID` with the invite id (`https://discord.gg/INVITEID`)

To embed it in the readme, insert it like this:
<br>`[![](https://dcbadge.vercel.app/api/server/INVITEID)](https://discord.gg/INVITEID)`

### Bot account&nbsp;&nbsp;&nbsp;![](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true)

1. DM me (![](https://dcbadge.vercel.app/api/shield/406125028065804289?style=flat&compact=true)) your bot's invite link
2. Wait for me to read the DM (it might take some time as it's a manual process)
3. Your shield will become available at `https://dcbadge.vercel.app/api/shield/BOTID?bot=true`
<br>(replace `BOTID` with [your Discord bot's user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))

To embed it in the readme, insert it like this:
<br>`![](https://dcbadge.vercel.app/api/shield/BOTID?bot=true)`

## Styling

You can chain parameters by connecting them with `&` (e.g. `?style=flat&theme=clean&compact=true`).

### `style`

This uses [shields.io](https://shields.io) to generate the badge, so you can choose one of the styles from there by appending `?style=` to the url.

| Badge                                                                                                        | Style         | Query                |
| :----------------------------------------------------------------------------------------------------------- | :------------ | :------------------- |
| ![flat](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&style=flat)               | flat          | `?style=flat`        |
| ![flat-square](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&style=flat-square) | flat-square   | `?style=flat-square` |
| ![for-the-badge (default)](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true)       | for-the-badge | None (default)       |
| ![plastic](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&style=plastic)         | plastic       | `?style=plastic`     |
| ![social](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&style=social)           | social        | `?style=social`      |

### `theme`

You can also use the `theme` query option to change the colors of the shield

In the following themes the green color gets replaced by the color corresponding to your presence (green, yellow, red, and grey, for online, idle, do not disturb, and offline, respectively)
| Badge | Theme | Query |
| :------------------------------------------------------------------------------------------------------------ | :--------------- | :------------------------ |
| ![default](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true) | Default | None (default) |
| ![default-inverted](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=default-inverted) | Default inverted | `?theme=default-inverted` |
| ![clean](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=clean) | Clean | `?theme=clean` |
| ![clean-inverted](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=clean-inverted) | Clean inverted | `?theme=clean-inverted` |
| ![dc](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=discord) | Discord | `?theme=discord` |
| ![dc-inverted](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=discord-inverted) | Discord inverted | `?theme=discord-inverted` |
| ![full-presence](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=full-presence) | Full presence | `?theme=full-presence` |
| ![grey](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=gray) | Gray | `?theme=gray` |
| ![blurple](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&theme=blurple) | Blurple | `?theme=blurple` |

Note: the `theme` option will not work with the social `style`.

### `compact`

Makes the badge more compact, but loses the online status text/server member count

| Badge                                                                                               | Query           |
| :-------------------------------------------------------------------------------------------------- | :-------------- |
| ![compact](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&compact=true) | `?compact=true` |

### `logoColor`

You can pass a color for the logo (the examples below use `&theme=default-inverted` to make the change more evident)

| Badge                                                                                                                             | Query                 | Description                                             |
| :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------------------------ |
| ![presence](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=presence&theme=default-inverted) | `?logoColor=presence` | Changes the color of the logo according to the presence |
| ![word](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=pink&theme=default-inverted)         | `?logoColor=pink`     | Supported colors [here](https://shields.io/#colors)     |
| ![hex](https://dcbadge.vercel.app/api/shield/852977967776399400?bot=true&logoColor=ff6b6b&theme=default-inverted)        | `?logoColor=ff6b6b`   | Any hex code, without the `#`                           |

## I've added this to my GitHub bio and it doesn't work!

This **won't** work in bios, only in profile readmes (and any other part of GitHub that supports markdown).
[Here](https://mansik16.medium.com/adding-a-readme-to-your-github-profile-2ec88bfedeb)'s some info on what a profile readme is and how to set it up.

For any questions feel free to contact me (![](https://dcbadge.vercel.app/api/shield/406125028065804289?style=flat&compact=true), [mdbadge@limes.pink](mailto:mdbadge@limes.pink))

## HTML

The API returns an SVG image, so you can embed it in your html just like you would with any other svg.

```html
<img src="https://dcbadge.vercel.app/api/shield/USERID" />
```
