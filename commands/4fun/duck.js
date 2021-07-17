const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kaczka",
  aliases: ["duck"],
  run: async (client, message, args) => {
    const res = await fetch("https://random-d.uk/api/v2/random");
    const img = (await res.json()).url;
    const embed = new MessageEmbed()
      .setTitle("Losowy obraz kaczki")
      .setImage(img)
      .setColor('#00ff2f')
      .setFooter(
        `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    message.channel.send(embed);
  },
};
