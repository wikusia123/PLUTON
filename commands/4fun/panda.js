const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "panda",
    description: 'Słodka ona, cn',
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`AWystąpił błąd, spróbuj ponownie!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Losowy obraz pandy`)
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
