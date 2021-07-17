const { Message, MessageEmbed } = require("discord.js");
const db = require("quick.db");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
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
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj osobę, której ostrzeżenie chcesz zresetować!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}rwarns @Zielino#6969 ] \n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Bot nie może mieć ostrzeżeń!`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`<@${message.mentions.users.first().id}> Nie ma żadnych ostrzeżeń!`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
        new MessageEmbed()
        .setDescription(`Twoje wszystkie ostrzeżenia zostały usunięte przez <@${message.author.id}>\nNa serwerze: __${message.guild.name}__`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
    );
    await message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`Zresetowano wszystkie ostrzeżenia <@${message.mentions.users.first().id}>`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
    );
  },
};