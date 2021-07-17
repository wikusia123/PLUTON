const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lis",
    aliases: ['fox'],
    descriprion: 'Słodka cn',
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/fox";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`Wystąpił błąd, spróbuj ponownie!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Losowy obraz lisa`)
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
