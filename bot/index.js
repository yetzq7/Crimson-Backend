const { Client, Intents, MessageEmbed } = require("discord.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});
   
    if (process.env.PLAYER_COUNT == true) {
        const updateBotStatus = () => {
            if (Array.isArray(global.Clients)) {
                client.user.setActivity(
                    `${global.Clients.length} player(s)`,
                    { type: "PLAYING" }
                );
            }
        };

        updateBotStatus();
        setInterval(updateBotStatus, 5000);
    }  
    if (process.env.PLAYER_COUNT === false) {
        const updateBotStatus = () => {
            if (Array.isArray(global.Clients)) {
                client.user.setActivity(
                    `Crimson`,
                    { type: "WATCHING" }
                );
            }
        };

        updateBotStatus();
        setInterval(updateBotStatus, 5000);
    }

client.login(process.env.BOT_TOKEN);