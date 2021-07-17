const prefix = require("../../config.json").prefix;
const { MessageEmbed } = require('discord.js')

module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice().trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(
            new MessageEmbed()
        .setDescription(`**Oznaczyłeś <@${client.user.id}>**`)
        .addField(`**Mój prefix to \`${prefix}\`**`, `**Użyj komendy **\`${prefix}help\`**, aby sprawdzić dostępne komendy**`)
        .addField(`**DODAJ BOTA**`, `[KLIKNIJ TUTAJ](https://discord.com/api/oauth2/authorize?client_id=780449423372845096&permissions=8&scope=bot)`, true)
        .addField('**SERWER SUPPORT**', '[KLIKNIJ TUTAJ](https://discord.gg/UNhcDDfAvy)', true)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}\n`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
            )
}
