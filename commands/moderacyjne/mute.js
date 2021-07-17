const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')
const prefix = require("../../config.json").prefix;

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setDescription(`Brak permisji!`)
            .addField('**Permisje:**', `\`\`\`ini\n [ ZARZĄDZANIE WIADOMOŚCIAMI ]\n\`\`\``)
            .setColor("FF0000")
            .setFooter(
            `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
        )
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send(
                new MessageEmbed()
                .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
                .setDescription(`Podaj użytkownika`)
                .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}mute @Zielino#6969 ]\n\`\`\``)
                .setColor("FF0000")
                .setFooter(
                `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
        )

        if (Member.id === message.guild.owner.id) {
            return message.channel.send(
              new MessageEmbed()
              .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
              .setDescription(`Nie możesz wyciszyć właściciela serwera!`)
              .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}mute @Zielino#6969 ]\n\`\`\``)
              .setColor("FF0000")
              .setFooter(
              `Komende użył: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
          );
          }

    if (message.author.id === Member.id) {
        return message.channel.send(
            new MessageEmbed()
      .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
      .setDescription(`Nie możesz wyciszyć samego siebie!`)
      .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}mute @Zielino#6969 ]\n\`\`\``)
      .setColor("FF0000")
      .setFooter(
      `Komende użył: ${message.author.tag}`,
  message.author.displayAvatarURL({ dynamic: true })
)
.setTimestamp()
  )
      }

        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send(
                        new MessageEmbed()
                        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
                        .setDescription(`nie znaleziono roli muted.`)
                        .setColor("FF0000")
                        .setFooter(
                        `Komende użył: ${message.author.tag}`,
                    message.author.displayAvatarURL({ dynamic: true })
                  )
                  .setTimestamp() 
                     )

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(
                    new MessageEmbed()
					.setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
					.setDescription(`Wyciszona rola została pomyślnie utworzona.`)
					.setColor('#00ff2f')
					.setFooter(
						`Komende użył: ${message.author.tag}`,
						message.author.displayAvatarURL({ dynamic: true })
					  )
					  .setTimestamp() 
					  );
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(
            new MessageEmbed()
            .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
            .setDescription(`<@${Member.id}> jest już wyciszony!`)
            .setColor("FF0000")
            .setFooter(
            `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp() 
        )
        const reason = args.slice(1).join(" ");
        await Member.roles.add(role2)
        message.channel.send(
            new MessageEmbed()
        .setTitle(`<:mod:858480386152464395> __**WYCISZONO**__ __**UŻYTKOWNIKA!**__`)
        .setDescription(`**Użytkownik <@${Member.id}> został wyciszony**`)
        .addField(`**Powód:**`, `\`${reason || "Brak powodu"}\``)
        .addField(`**Moderator:**`, `<@${message.author.id}>`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
           )
    }
    }
