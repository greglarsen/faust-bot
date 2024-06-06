const configx = require("./uri-cid");
const myuri = configx.myuri;
const mycid = configx.mycid;


const config = require("./config");
const password = config.password;

const { BskyAgent } = require("@atproto/api");

async function sendPost() {
  const agent = new BskyAgent({ service: "https://bsky.social" });
  await agent.login({
    identifier: "faust-bot.bsky.social",
    password: password,
  });

await agent.like(myuri,mycid);

};


sendPost();






