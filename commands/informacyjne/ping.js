const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Zwraca opóźnienie i ping API',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`**\`🏓\` Pingowanie...**`)
        const embed = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setColor('#00ff2f')
        .setDescription(
            `Ping: ${Math.floor(
                msg.createdTimestamp - message.createdTimestamp,
            )}ms\nOpóźnienie API: ${client.ws.ping}ms`)
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
            await message.channel.send(embed)

    }
}
