const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ekipa',
    description: 'Pokazuje ekipe plutona',
    run: async (client, message, args) => {
        const ekipa = new MessageEmbed()

        .setTitle(`Squad PlutonBota`)
        .addField('**Owner:**', `\`1.\` <@695672097749336114>,\n\`2.\`<@691735699350749273>,\n`)
        .addField('**Administratorzy:**', `\`Brak\``)
        .addField(`**Moderatorzy:**`, `\`1.\` <@852192495668035664>,\n`)
        .addField(`**Trial Moderatorzy:**`, `\`Brak\``)
        .addField(`**Support+:**`, `\`1.\` <@419903382581542914>,\n`)
        .addField(`**Support:**`, `\`1.\` <@809043931475345438>,`)
        .addField(`**Trial Support:**`, `\`1.\` <@403558415559032832>,\n\`2.\` <@536579527753596938>,\n`)
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
          .setColor('#00ff2f')
          message.channel.send(ekipa)
    }
}
