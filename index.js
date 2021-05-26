const Discord = require('discord.js');
const randomWords = require('random-words');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
    console.log("I'm always ready you jerk, I bet you are never ready. stupid idiot face.");
})

client.on('message', async message => {
    async function playAmogus(){
        if (message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
                
            const dispatcher = connection.play("AMOGUS.mp3");
            dispatcher.on('error', console.error);
            dispatcher.destroy();
        }
        else{
            message.channel.send("You absoulte imbecile. You actually thought I could speak when I have no place to speak into. You non Rick and Morty fans with your IQ below 7892. You will never understand how to be a normal person you idiot!");
        }
    }

    if (message.content.startsWith(`${process.env.PREFIX}amogus`)){
        playAmogus();
    }

    if (message.content.startsWith(`${process.env.PREFIX}ego`)){
        var beginningMessageArray = [
            "For starters, I am me and you are you ",
            "You have no idea what its like to be me. ",
            "I feel superior to you. ",
            "When you do something stupid, " ,
            "When I screw up, its not my fault. ",
            "When I do something that upsets you, I have valid reasons for it. ",
            "You never see my good intentions. All you do is criticize. ",
            "When you try to convince me of anything, ",
            "When you finally pin me down and prove that you are right and I am wrong, ",
            " "
        ];
        var randomWordArray = randomWords(2);
        var randomWord1 = randomWordArray[0] + " ";
        var randomWord2 = randomWordArray[1];
        var randomSentence = randomWord1 +  randomWord2;
        var messageEgo = beginningMessageArray[Math.floor(Math.random() * beginningMessageArray.length)] + randomSentence;
        message.channel.send(messageEgo);
    }
});


client.login(process.env.TOKEN);
