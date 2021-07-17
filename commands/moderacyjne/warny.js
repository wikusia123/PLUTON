const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
  name: "warny",
  description: "Sprawdź swoje ostrzeżenia",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`${user} posiada **${warnings}** ostrzeżeń(-nie)!`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp() 

    );
  },
};
