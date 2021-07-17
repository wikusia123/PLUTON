const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rzut-kostka",
  aliases: ["rk"],
  run: async (client, message, args) => {
    let limit = args[0]
    if (!limit) limit = 6
    const n = Math.floor(Math.random() * limit + 1)
    if (!n || limit <= 0)
        return message.channel.send('Podaj liczbe scianek kosci')
    
    const embed = new MessageEmbed()
        .setTitle('\🎲  Rzut Kostką \🎲')
        .setDescription(`${message.member}, wypadło Ci **${n}**!`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
    message.channel.send(embed)
},
};