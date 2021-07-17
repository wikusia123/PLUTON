const { MessageEmbed } = require("discord.js");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "kick",
  description: "wyrzuć każdego jednym strzałem, nie znając nikogo xD",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")){  return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Brak permisji!`)
        .addField('**Permisje:**', `\`\`\`ini\n [ WYRZUCANIE UŻYTKOWNIKÓW ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
        );
    }
    const target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj użytkownika!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}kick @Zielino6969 ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
    );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Nie możesz sam siebie zkickować!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}kick @Zielino#6969 ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
      );
    }

    var reason = args.slice(1).join(" ");

    target.send(
      new MessageEmbed()
      .setTitle(`**<:mod:858480386152464395> __ZOSTAŁEŚ(-AŚ)__ __WYRZUCONY(-A)__!**`)
      .setDescription(`Moderator: <@${message.author.id}>\nPowód: \`${reason || "Brak powodu"}\`\nNa serwerze: __${message.guild.name}__`)
      .setColor("FF0000")
      .setFooter(
      `Komende użył: ${message.author.tag}`,
  message.author.displayAvatarURL({ dynamic: true })
)
.setTimestamp()
    );

    let embed = new MessageEmbed()

    
    .setDescription(`<:mod:858480386152464395> **WYRZUCONO UŻYTKOWNIKA!\n\nUżytkownik ${target} został wyrzucony**`)
    .addField(`**Powód:**`, `\`${reason || "Brak powodu"}\``)
    .addField(`**Moderator:**`, `${message.author}`)
    .setColor('#00ff2f')
    .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()

    message.channel.send(embed);
    target.kick(args[1]);
  },
};
