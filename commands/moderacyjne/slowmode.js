const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const prefix = require("../../config.json").prefix;

module.exports = {
    name: 'slowmode',
    aliases: ['sm'],
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(
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

        if (!args[0]) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Nie określiłeś czasu!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}slowmode 3s ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
)
        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'Brak powodu';

        const embed = new MessageEmbed()
                .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
                .setColor('#00ff2f')
                .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send(

            embed.setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setColor('#00ff2f')
            .setDescription('Czas kanału jest już wyłączony!')
            .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
            )
            return message.channel.setRateLimitPerUser(0, reason)
            
        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Nieprawidłowy czas, spróbuj ponownie!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}slowmode 3s ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
  )

        if (time >= 21600) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Ten limit trybu wolnego jest zbyt wysoki.\n Wprowadź wartość mniejszą niż 6 godzin.`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}slowmode 3s ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
        )
        if (currentCooldown === time) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Tryb zwolniony jest już ustawiony na ${args[0]}`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
  );

        embed.setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
            .addField('Czas: ', args[0])
            .addField('Powód: ', reason)
            .setColor('#00ff2f')
            .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}
