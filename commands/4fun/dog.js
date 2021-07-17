const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pies",
  aliases: ["dog"],
  run: async (client, message, args) => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const img = (await res.json()).message;
    const embed = new MessageEmbed()
      .setTitle("Losowy obraz psa")
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