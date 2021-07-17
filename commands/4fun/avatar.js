const { MessageEmbed }= require("discord.js")

module.exports = {
    name : 'avatar',
    run : async(client, message, args) => {
        const toAvatar = message.guild.member(message.mentions.users.first())

        if (!toAvatar) {
            const embed = new MessageEmbed()
                .setTitle("Avatar")
                .setURL(message.author.avatarURL())
                .setDescription("Oto twój avatar")
                .setColor('#00ff2f')
                .setFooter(
                    `Komende użył: ${message.author.tag}`,
                    message.author.displayAvatarURL({ dynamic: true })
                  )
                  .setTimestamp()
                .setImage(message.author.avatarURL({dynamic: true}))
                    
            message.channel.send(embed)
            return
        }

        const embed = new MessageEmbed()
            .setTitle("Avatar")
            .setURL(toAvatar.user.avatarURL())
            .setDescription(`Oto avatar ${toAvatar}`)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
            .setImage(toAvatar.user.avatarURL({dynamic: true}))
        message.channel.send(embed)
    }
}