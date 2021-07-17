const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bot-info',
    aliases: ['bi'],
    description: 'Wysyła informację o bocie.',
    deleteInvoke: false,
    async run(client, message, args) {
        const uptime = process.uptime();
        const days = Math.floor((uptime % 31536000) / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.round(uptime % 60);
        const botuptime = (days > 0 ? days + 'd, ' : '') + (hours > 0 ? hours + 'g, ' : '') + (minutes > 0 ? minutes + 'm, ' : '') + (seconds > 0 ? seconds + 's.' : '');

        const embed = new MessageEmbed()
            .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
            .setDescription('**INFORMACJE O BOCIE**')
            .setTimestamp()
            .addField('**Czas działania:**', botuptime, false)
            .addField('**Ping:**', `${Math.round(client.ws.ping)} ms`)
            .addField('**Serwery:**', client.guilds.cache.size)
            .addField('**Użytkownicy:**', client.users.cache.size)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp();

        message.channel.send(embed);
    },
};
