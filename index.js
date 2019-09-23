const { App } = require("@slack/bolt");
require("dotenv").config();

console.log(process.env.SLACK_SIGNING_SECRET);

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// // The echo command simply echoes on command
// app.command("/bonk", async ({ command, ack, say }) => {
//   // Acknowledge command request
//   ack();
//   console.log(`${command.text}`);
//   say(`${command.text}`);
// });

app.message("bonk", ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  say(`Bonk :bonk: <@${message.user}>\!`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
