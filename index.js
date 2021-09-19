const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Up'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// Start the discord bot code
const data = require("./traits.json");
const Discord = require('discord.js');
const Canvas = require('canvas');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Hello, How are you, I am ready, please help, there is too much raining.");
})
var tagged = false;
var timesTalked = 0;
client.on('message', async message => {
    const guild = message.member.guild;
    const THEserver = guild.id == "800456916517519461";
    const originServer = guild.id == "879177830007726081";
    const bot = message.member.user.bot;
    if (originServer)
    {
        if (message.content.startsWith(`${process.env['PREFIX']}avatar`)){
            const member = message.mentions.members.first();
            if (member == null){
                message.channel.send("Please follow the command with @ing the person who's avatar you want to country-fy");
                return;
            } else {
                var memberAvatar = member.user.displayAvatarURL({ format: 'png', size: 128});
                const canvas = Canvas.createCanvas(128, 128);
                const context = canvas.getContext('2d');
                const background = await Canvas.loadImage(memberAvatar);
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
                context.globalAlpha = 0.32;
                var countryNum = Math.floor(Math.random() * 137);
                var country = await Canvas.loadImage(`https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/Flags/${countryNum}.png`);
                context.drawImage(country, 0, 0, canvas.width, canvas.height);
                var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "image.png");
                message.channel.send(attachment);
                return;
            }
        }
    
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
            const fartFile = new Discord.MessageAttachment(fartMp3, `${fartNum}.mp3`);
            message.channel.send(fartFile);
    
        } 

        if (message.content.startsWith(`${process.env['PREFIX']}tag`)){
            tagged = true;
        } else if (message.content.startsWith(`${process.env['PREFIX']}untag`)){
            tagged = false;
        }

        if (tagged && !bot){
            timesTalked++;
            console.log(timesTalked);
            if (timesTalked == 5){
                message.channel.send("among us");
                timesTalked = 0
                console.log(timesTalked);
            };
        }
    }
    if (THEserver)
    {
        if (message.content.startsWith(`${process.env['PREFIX']}avatar`)){
            const member = message.mentions.members.first();
            if (member == null){
                message.channel.send("Please follow the command with @ing the person who's avatar you want to country-fy");
                return;
            } else {
                var memberAvatar = member.user.displayAvatarURL({ format: 'png', size: 128});
                const canvas = Canvas.createCanvas(128, 128);
                const context = canvas.getContext('2d');
                const background = await Canvas.loadImage(memberAvatar);
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
                context.globalAlpha = 0.32;
                var countryNum = Math.floor(Math.random() * 137);
                var country = await Canvas.loadImage(`https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/Flags/${countryNum}.png`);
                context.drawImage(country, 0, 0, canvas.width, canvas.height);
                var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "image.png");
                message.channel.send(attachment);
                return;
            }
        }
    
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
            const fartFile = new Discord.MessageAttachment(fartMp3, `${fartNum}.mp3`);
            message.channel.send(fartFile);
    
        }
    }
});


//Animal Abuser Role bitfield 104320576 , Egotistical bot bitfield 1176612416

client.login(process.env['TOKEN']);

//https://discordapi.com/permissions.html
//Client ID = 846559056889249793