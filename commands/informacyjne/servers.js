const { Message, MessageEmbed } = require("discord.js")


module.exports = {
    name: 'servers',
    run: async(client, message, args) => {
      const servers = client.guilds.cache.array().map(guild => {
            return `**ID:** \`${guild.id}\`\n**NAZWA:** \`${guild.name}\`\n**UŻYTKOWNIKÓW:** \`${guild.members.cache.size}\`\n`
        })

      const embed = new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`**SERWERY NA KTÓRYM JEST BOT**`)
        .addField('SERWERY:\n', servers)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
 
      message.channel.send(embed)
}
}
