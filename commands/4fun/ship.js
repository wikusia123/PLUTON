const block = "⬜";
const heart = "<:green:858700966269550602>";
const { MessageEmbed } = require("discord.js")
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "ship",
    run: async (client, message, args) => {
        
    const user = message.mentions.users.first();
    if (!user) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj użytkownika!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}ship @Zielino#6969 ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
    )
     if(user && user.id === message.author.id) {
     return message.reply("Bruh. Chcesz samego siebie shipować? xd")
     }
if (message.mentions.users.size < 2) {
    let loveEmbed = new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`**Shipowanie...**\nSHIP! ${message.author}, ${user}!`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.avatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`**Procent:**`, ship())
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
        
   return message.channel.send(loveEmbed)
} else if (message.mentions.users.size > 1)  return message.channel.send(luv)
    }
}
function ship() {
    const hearts = Math.floor(Math.random() * 110) + 0;
    const hearte = (hearts/10)
  
    const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
    return str;
}
