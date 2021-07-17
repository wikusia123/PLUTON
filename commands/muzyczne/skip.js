const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'skip',
    aliases: ['s'],

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

        await client.distube.skip(message)
        await message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
            .setDescription(`Pominięto utwór!`)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
              )
    }
}