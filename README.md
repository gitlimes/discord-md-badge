<h1 style="text-align: center">Discord Profile Markdown badge</h1>

Add to your GitHub readme a badge that shows your Discord username and presence!

![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)


### Set up
1. Join the [Discord server](https://discord.gg/zkspfFwqDg)
2. Add to your readme

   `![](https://discord-md-badge.vercel.app/api/shield/USERID)`

   replacing `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) (e.g. `![](https://discord-md-badge.vercel.app/api/shield/406125028065804289)`)

Done! (Make sure not to leave the server, as that's where the bot gets your presence information from)


### Styling
This uses [shields.io](https://shields.io) to generate the badge, so you can choose one of the styles from there by appending `?style=` to the url.

Badge | Style | Query
 :--- | :--- | :---
![flat](https://user-images.githubusercontent.com/49426949/121810699-24ba9100-cc62-11eb-8c6c-cdc40da99b87.png) | Flat | `?style=flat`
![flat-square](https://user-images.githubusercontent.com/49426949/121810774-65b2a580-cc62-11eb-869b-7973c9450a96.png) | Flat Square | `?style=flat-square`
![for-the-badge](https://user-images.githubusercontent.com/49426949/121810985-1faa1180-cc63-11eb-8fc7-e6b8c2e38bc1.png) | For the Badge | None
![plastic](https://user-images.githubusercontent.com/49426949/121810663-05236880-cc62-11eb-8b9c-bd736d1b5787.png) | Plastic | `?style=plastic`
![social](https://user-images.githubusercontent.com/49426949/121810811-824edd80-cc62-11eb-9922-bdf2c8be7371.png) | Social | `?style=social`

### Deploy it yourself
To deploy this yourself:
1. create a bot [here](https://discord.com/developers/applications)
2. enable [presence intent and server members intent](https://user-images.githubusercontent.com/49426949/121817477-fa78cb80-cc81-11eb-937c-181541493f1d.png)
3. invite your bot to a server you're in by going to the OAuth2 tab, selecting the "bot" scope and navigating to the url
4. click on the "Deploy with Vercel" button down below and provide the token to your bot and the id of the server you invited the bot to

Done!

[![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with%20Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmontylion%2Fdiscord-md-badge&env=DC_TOKEN,GUILD_ID&envDescription=The%20DC_TOKEN%20environment%20variable%20is%20needed%20to%20access%20the%20Discord%20API%2C%20and%20it%20should%20be%20the%20token%20of%20a%20bot%20you%20share%20a%20server%20with.%20The%20GUILD_ID%20environment%20variable%20should%20be%20the%20ID%20of%20a%20server%20you%20and%20the%20bot%20have%20in%20common.)
