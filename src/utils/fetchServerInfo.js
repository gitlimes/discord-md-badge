import "dotenv/config";

const regexes = {
  invite:
    /discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/(?<code>[\w-]{2,255})/i, // https://github.com/discordjs/discord.js/blob/e673b3c129f288f9f271e0b991d16dc2901cdc8a/packages/discord.js/src/structures/Invite.js#L21C3-L21C104
  name: /(?<=\<title\>).*?(?=\<\/title\>)/g,
  members: /(?<=\<meta name="description" content=".* \| ).*(?=.*" \/>)/g,
  canonicalURL: /(?<=\<link rel="canonical" href=").*?(?=" \/>)/g,
};

// set up in-memory key-value store for caching
import Keyv from "keyv";
const keyv = new Keyv();

// set up proxy
import { ProxyAgent } from "undici";
const dispatcher = new ProxyAgent(process.env.PROXY_URL);

export default async function fetchServerInfo(invite) {
  const inviteID = regexes.invite.exec(invite)?.groups?.code ?? invite;

  let serverInfo = await keyv.get(inviteID);

  // if the server info has expired, or has never been fetched, we fetch and cache it again
  if (!serverInfo) {
    serverInfo = await _fetchServer(inviteID);

    // if we get a fetch error we retry a few times, then we give up and cache it as broken for 24h.
    let i = 0;
    while (serverInfo.fetcherror) {
      serverInfo = await _fetchServer(inviteID);
      i += 1;

      if (i >= 5) {
        serverInfo = {
          error: `Persistent error: ${serverInfo.error}`,
        };
        break;
      }
    }

    // cache in memory for a day (servers don't really change that much)
    keyv.set(inviteID, serverInfo, 24 * 60 * 60 * 1000);
  }

  return serverInfo;
}

// function that actually "fetches" data in the "HTTP request" sense
async function _fetchServer(inviteID) {
  const reconstructedInviteURL = `https://discord.com/invite/${inviteID}`;

  try {
    const serverFetch = await fetch(reconstructedInviteURL, {
      dispatcher,
    });

    if (!serverFetch.ok) {
      return {
        fetcherror: `${serverFetch.status}, ${serverFetch.statusText}`,
      };
    }

    const server = await serverFetch.text();

    if (regexes.canonicalURL.exec(server)?.[0] === reconstructedInviteURL) {
      return {
        name: regexes.name.exec(server)[0],
        memberCount: regexes.members.exec(server)[0],
      };
    } else {
      // if the invite page doesn't contain a canonical link, then the invite is invalid
      return {
        error: "invalid invite",
      };
    }
  } catch (error) {
    console.error('Fetch error:', error); 
    return {
      fetcherror: `network error: ${error.message}`,
    };
  }
}
