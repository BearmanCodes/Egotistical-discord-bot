
// Start the discord bot code
const { Client, GatewayIntentBits, Message, AttachmentBuilder, Attachment, Embed } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, 
GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

const sleep = ms => new Promise(r => setTimeout(r, ms));

client.once('ready', () => {
    console.log("Hello, How are you, I am ready, please help, there is too much raining.");
      /*
    const guild = client.guilds.cache.find(guild => guild.id == "800456916517519461");
    message = guild.channels.cache.find(channel => channel.id == "802746243176071188");
    message.send("BEARMAN HAS LEFT THE VC!")
    VC = guild.channels.cache.find(channel => channel.id == "969358682695548958");
    var bearman = guild.members.cache.find(member => member.id == process.env['BEARMAN']);
    var mack =  guild.members.cache.find(member => member.id == process.env['MACK']);
    var joey =  guild.members.cache.find(member => member.id == process.env['JOEY']);
    var lexie =  guild.members.cache.find(member => member.id == process.env['LEXIE']);
    var dan =  guild.members.cache.find(member => member.id == process.env['DAN']);
    var noVCBearman = bearman.voice.channel == null;
    var noVCMack = mack.voice.channel == null;
    var noVCJoey = joey.voice.channel == null;
    var noVCLexie = lexie.voice.channel == null;
    var noVCDan = dan.voice.channel == null;
    var noChannelBearman = bearman.voice.channel != VC;
    var noChannelMack = mack.voice.channel != VC;
    var noChannelJoey = joey.voice.channel != VC;
    var noChannelLexie = lexie.voice.channel != VC;
    var noChannelDan = dan.voice.channel != VC;
   
   
   function check(){
    if (noVCBearman){
        message.send("BEARMAN HAS LEFT THE VC!");
        noVCBearman = false;
        noChannelBearman = false;
        clearInterval(Bearmancheck);
    } else {
        if (noChannelBearman){
            message.send("BEARMAN HAS LEFT THE VC!");
            noVCBearman = false;
            noChannelBearman = false;
            clearInterval(Bearmancheck);
        }
    }
    
    if (noVCMack){
        message.send("MACK HAS LEFT THE VC!");
        noVCMack = false;
        noChannelMack = false;
        clearInterval(Mackcheck);
    } else {
        if (noChannelMack){
            message.send("MACK HAS LEFT THE VC!");
            noVCMack = false;
            noChannelMack = false;
            clearInterval(Mackcheck);
        }
    }

    if (noVCJoey){
        message.send("JOEY HAS LEFT THE VC!");
        noVCJoey = false;
        noChannelJoey = false;
        clearInterval(Joeycheck);
    } else {
        if (noChannelJoey){
            message.send("JOEY HAS LEFT THE VC!");
            noVCJoey = false;
            noChannelJoey = false;
            clearInterval(Joeycheck);
        }
    }
    if (noVCLexie){
        message.send("LEXIE HAS LEFT THE VC!");
        noVCLexie = false;
        noChannelLexie = false;
        clearInterval(Lexiecheck);
    } else {
        if (noChannelLexie){
            message.send("LEXIE HAS LEFT THE VC!");
            noVCLexie = false;
            noChannelLexie = false;
            clearInterval(Lexiecheck);
        }
    }
    if (noVCDan){
        message.send("DAN HAS LEFT THE VC!");
        noVCDan = false;
        noChannelDan = false;
        clearInterval(Dancheck);
    } else {
        if (noChannelDan){
            message.send("DAN HAS LEFT THE VC!");
            noVCDan = false;
            noChannelDan = false;
            clearInterval(Dancheck);
        }
    }
    
}
    var Bearmancheck = setInterval(function() {noVCBearman = bearman.voice.channel == null; noChannelBearman = bearman.voice.channel != VC;}, 1000);
    var Mackcheck = setInterval(function() {noVCMack = mack.voice.channel == null;  noChannelMack = mack.voice.channel != VC;}, 5000);
    var Joeycheck = setInterval(function() {noVCJoey = joey.voice.channel == null; noChannelJoey = joey.voice.channel != VC;}, 5000);
    var Lexiecheck = setInterval(function() {noVCLexie = lexie.voice.channel == null; noChannelLexie = lexie.voice.channel != VC;}, 5000);
    var Dancheck = setInterval(function() {noVCLexie = lexie.voice.channel == null; noChannelDan = dan.voice.channel != VC;}, 5000);
    setInterval(check, 1000);
    */
})
var tagged = false;
var timesTalked = 0;
//686307882127720457


client.on('voiceStateUpdate', voice => {
    if(voice.member.id == "546422726324125716" && voice.member.voice.serverMute){
        voice.member.voice.serverMute == false;
    }
})


client.on('messageCreate', async message => {
    console.log("something");   
    const guild = message.member.guild;
    const THEserver = guild.id == "866053206319955978";
    const originServer = guild.id == "879177830007726081";
    const bot = message.member.user.bot;
    if (originServer)
    {
        //Canvas is currently broken
        /*
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
        */
    
        if (message.content.startsWith(`${process.env['PREFIX']}pin`)){
            // I made a get member thing here. Might use this later so I'm gonna use it here but it's useless for pinning.
            
            var messageLower = message.content.toLowerCase();   
            var withoutPrefix = messageLower.replace(`${process.env['PREFIX']}pin`, '').substring(1);
            const member = guild.members.cache.find(mem => mem.user.username.toLowerCase().trim() == withoutPrefix);
            
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
        //Canvas is currently broken
        /*
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
        */

        if (message.content.startsWith("*fart")){
            console.log("bruh");
            var fartNum = Math.floor(Math.random() * 48);
            var fartMp3 = "https://github.com/BearmanCodes/Egotistical-discord-bot/raw/master/audio/farts/" + fartNum + ".mp3";
            const fartFile = new AttachmentBuilder(fartMp3, { name: `${fartNum}.mp3` });
            message.channel.send({files: [fartFile]})
            
        }

    }
});


//Animal Abuser Role bitfield 104320576 , Egotistical bot bitfield 1176612416

client.login(process.env['TOKEN']);

//https://discordapi.com/permissions.html
//Client ID = 846559056889249793