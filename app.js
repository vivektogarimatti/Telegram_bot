const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => ctx.reply("Welcme to hell"));
bot.command("kd", (ctx) => ctx.reply("none of your business"));
bot.command("link", (ctx) => ctx.reply("https://katworld.net/"));
bot.command("meme", async (ctx) => {
  await ctx.reply("https://tenor.com/iB671Hl6v3r.gif");
});
bot.launch();
