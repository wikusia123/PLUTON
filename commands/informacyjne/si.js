const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server-info',
    aliases: ['si'],
    run: async (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new MessageEmbed()
        .setTitle(`Informacje o serwerze \`${message.guild.name}\``, message.guild.iconURL)
        .addField('**Właściciel:**', message.guild.owner)
        .setThumbnail(sicon)
        .addField("**Nazwa serwera:**", message.guild.name)
        .addField('**Użytkownicy:**', checkMembers(message.guild))
        .addField('**Boty:**', checkBots(message.guild))
        .addField('**Aktywni:**', checkOnlineUsers(message.guild))
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp();

    return message.channel.send(serverembed);
}
}