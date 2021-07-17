const { MessageEmbed } = require("discord.js");
module.exports = {
  name : 'embed',
  run : async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send(
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
    const text = args.slice(1).join(" "); 

    const channel = message.mentions.channels.first();
    if (!channel) return message.reply("Podaj kanał."); 

    const title = text.split("|")[0];
    if (!title) return message.reply("Podaj tytuł.");
    const description = text.split("|")[1];
    if (!description) return message.reply("Podaj opis.");
    const kolor = text.split("|")[2];
    if(!kolor) return message.reply("Podaj kolor.")

    const embed = new MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setColor(kolor)
      .setFooter(
          `Komende użył: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    channel.send(embed);
  }
}
