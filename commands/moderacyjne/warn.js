const { MessageEmbed } = require("discord.js");
const prefix = require("../../config.json").prefix;
const db = require("quick.db");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "@oznaczenie powód",
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
        .setDescription(`Podaj użytkownika!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}warn @Zielino#6969 ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }

    if (message.author.id === user.id) {
      return message.channel.send(
            new MessageEmbed()
      .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
      .setDescription(`Nie możesz ostrzeć samego siebie!`)
      .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}warn @Zielino#6969 ]\n\`\`\``)
      .setColor("FF0000")
      .setFooter(
      `Komende użył: ${message.author.tag}`,
  message.author.displayAvatarURL({ dynamic: true })
)
.setTimestamp()
  );
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Nie możesz ostrzeć właściciela serwera!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}warn @Zielino#6969 ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
    );
    }

    const reason = args.slice(1).join(" ");

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        new MessageEmbed()
        .setTitle(`**<:mod:858480386152464395> __ZOSTAŁEŚ(-AŚ)__ __OSTRZEŻONY(-A)__!**`)
        .setDescription(`Moderator: <@${message.author.id}>\nPowód: ${reason || "Brak powodu"}\nNa serwerze: __${message.guild.name}__`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
      await message.channel.send(
        new MessageEmbed()
    .setColor('#00ff2f')
        .setTitle("<:mod:858480386152464395> **__OSTRZEŻONO__ __UŻYTKOWNIKA!__**")
        .setDescription(`**Użytkownik <@${message.mentions.users.first().id}> został ostrzeżony**`)
        .addField(`**Powód:**`, `\`${reason || "Brak powodu"}\``)
        .addField(`**Moderator:**`, `${message.author}`)
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    } else if (warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);

      user.send(
        new MessageEmbed()
        .setTitle(`**<:mod:858480386152464395> __ZOSTAŁEŚ(-AŚ)__ __OSTRZEŻONY(-A)__!**`)
        .setDescription(`Moderator: <@${message.author.id}>\nPowód: ${reason || "Brak powodu"}\nNa serwerze: __${message.guild.name}__`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );

      await message.channel.send(
        new MessageEmbed()
    .setColor('#00ff2f')
        .setTitle("<:mod:858480386152464395> **__OSTRZEŻONO__ __UŻYTKOWNIKA!__**")
        .setDescription(`**Użytkownik <@${message.mentions.users.first().id}> został ostrzeżony**`)
        .addField(`**Powód:**`, `\`${reason || "Brak powodu"}\``)
        .addField(`**Moderator:**`, `${message.author}`)
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }
  },
};
