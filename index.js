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
    const guild = message.member.guild;
    //guild.members.cache.find
    
    if (message.content.startsWith(`${process.env['PREFIX']}pin`)){
        // I made a get member thing here. Might use this later so I'm gonna use it here but it's useless for pinning.
        /*
        var messageLower = message.content.toLowerCase();   
        var withoutPrefix = messageLower.replace(`${process.env['PREFIX']}pin`, '').substring(1);
        const member = guild.members.cache.find(mem => mem.user.username.toLowerCase().trim() == withoutPrefix);
        */
        var messageLower = message.content.toLowerCase();   
        var withoutPrefix = messageLower.replace(`${process.env['PREFIX']}pin`, '').substring(1).trim();
        console.log(message.channel.messages.fetch(withoutPrefix).then(
            message => message.pin()
        ));
    };

    if (message.content.startsWith(`${process.env['PREFIX']}fart`)){
        var fartNum = Math.floor(Math.random() * 48);
        var fartMp3 = "https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/audio/farts/" + fartNum + ".mp3";

        message.channel.send("", { files: [fartMp3] });

    }

    if (message.content.startsWith(`${process.env['PREFIX']}playfart`)){
        async function playFart()
        {
            if (message.member.voice.channel){
                var fartNum = Math.floor(Math.random() * 48);
                var fartMp3 = "https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/audio/farts/" + fartNum + ".mp3";
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(fartMp3);

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                })
                dispatcher.on('error', () => {
                    console.error
                    dispatcher.destroy();
                });
                dispatcher.destroy();
            }
        }
        playFart();
    }

    
});


client.login(process.env['TOKEN']);

