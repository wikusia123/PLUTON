const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "setwelcome",
  aliases: ['sw'],
  usage: '#kanal',
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(
          new MessageEmbed()
          .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
          .setDescription(`Brak permisji!`)
          .addField('**Permisje:**', `\`\`\`ini\n [ ZARZĄDZANIE KANAŁAMI ]\n\`\`\``)
          .setColor("FF0000")
          .setFooter(
          `Komende użył: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp()
      )
    }

    const channel = message.mentions.channels.first()

    if(!channel) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj kanał!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}setwelcome #powitania ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }
        
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(
      new MessageEmbed()
      .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
      .setColor('#00ff2f')
      .setDescription(`Ustawiono kanał do powitań!`)
      .addField(`**Kanał:**`, `${channel}`)
      .setFooter(
        `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
    )
  }
}
