const { MessageEmbed } = require('discord.js');
const moment = require("moment")

const channelTypes = {
    text: 'Tekstowy',
    voice: 'Głosowy',
    category: 'Kategoria'
}

module.exports = {
    name : 'channel-info',
    aliases : ['chi'],
    usage : ' #kanal/ID',
    description : 'Informacje o kanale',
    run : async(client, message, args) => {
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.reply("**Nie odnaleziono kanału!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Informacje o kanale **\`${channel.name}\`**`)
            .addField("**Nazwa Kanału**", channel.name)
            .addField("**ID Kanału**", channel.id)
            .addField("**Typ Kanału**", channelTypes[channel.type])
            .addField("**Opis Kanału**", `${channel.topic || "Brak opisu"}`)
            .addField("**Kanał został utworzony w**", `${moment.utc(channel.createdAt).format("dddd, MMMM Do YYYY")}`)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()

        message.channel.send(channelembed);
    }
}
