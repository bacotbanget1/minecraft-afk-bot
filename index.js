import mineflayer from "mineflayer";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("AFK bot is online"));
app.listen(port, () => console.log(`Web server running on port ${port}`));

function createBot() {
  const bot = mineflayer.createBot({
    host: "emerald.magmanode.com",
    port: 30921,
    username: "AFK_Bot_" + Math.floor(Math.random() * 1000),
    version: "1.20.1"
  });

  bot.on("spawn", () => console.log("✅ Bot joined the server!"));
  bot.on("end", () => {
    console.log("Bot disconnected, reconnecting...");
    setTimeout(createBot, 5000);
  });
  bot.on("error", (err) => console.log("Bot error:", err));
}

createBot();
