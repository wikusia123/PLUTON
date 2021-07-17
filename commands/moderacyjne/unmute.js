const { MessageEmbed } = require('discord.js')
const prefix = require("../../config.json").prefix;

module.exports=  {
    name : 'unmute', 
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setDescription(`Podaj użytkownika`)
            .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}unmute @Zielino#6969 ]\n\`\`\``)
            .setColor("FF0000")
            .setFooter(
            `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
        )

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
            .setDescription(`**Użytkownik <@${Member.id}> został odciszony!**`)
            .addField(`**Moderator:**`, `<@${message.author.id}>`)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
        )

    }
}
