exports.run = (client, msg, args) => {

    let game = args.join(" ")

if(msg.author.id !== "") return msg.channel.send(`:x: **Are you stupid?** Only bot developers can use this command.`);
client.user.setActivity(`${game}`, { type: 'STREAMING', url: `twitch url`})
msg.channel.send(`:white_check_mark: Successfully set the Streaming status to **${game}**.`)
 console.log(`[info] Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}
config: {}
