const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "koala",
    description: 'Słodka ona, cn',
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/koala";
        const facts = "https://some-random-api.ml/facts/koala"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`Wystąpił błąd, spróbuj ponownie!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Losowy obraz koali`)
            .setImage(image.link)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()

        await message.channel.send(embed)
    }
}