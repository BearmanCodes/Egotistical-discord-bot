const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Up'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// Start the discord bot code
const Discord = require('discord.js');
const randomWords = require('random-words');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
    console.log("I'm always ready you jerk, I bet you are never ready. stupid idiot face.");
})

client.on('message', message => {
    const guild = message.channel.guild;

    if (message.content.startsWith(`${process.env['PREFIX']}fart`)){
        var fartNum = Math.floor(Math.random() * 48);
        var fartMp3 = "https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/audio/farts/" + fartNum + ".mp3";

        message.channel.send("", { files: [fartMp3] });

    }

    
});


client.login(process.env['TOKEN']);

