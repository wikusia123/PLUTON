const { MessageEmbed } = require('discord.js')
const prefix = require("../../config.json").prefix;

module.exports = {
    name: 'play',
    aliases: ['p'],

    run: async (client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setDescription(`Wejdź na kanał głosowy!`)
            .setColor("FF0000")
            .setFooter(
            `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
        )

        const music = args.join(" ");
        if(!music) return message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setDescription(`Podaj utwór!`)
            .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}play miejska jungla ]\n\`\`\``)
            .setColor("FF0000")
            .setFooter(
            `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
        )

        await client.distube.play(message, music)
    }
}