const { Client, Message, MessageEmbed } = require('discord.js')
const figlet = require('figlet')
const prefix = require("../../config.json").prefix;

module.exports = {
    name: "ascii",
    usage : ' tekst',
    run: async (client, message, args) => {
    const tresc = args.join(" ");
 
    if(!tresc) return message.channel.send(
            new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj treść!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}ascii Zielinus ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
    )
        figlet.text(
            args.join(" "), 
        {
            font: "",
        },
         async(err, data) => {
            message.channel.send(
                new MessageEmbed()
		.setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
                .setDescription(`**Ascii**\n\n\`\`\`${data}\`\`\``)
                .setColor('#00ff2f')
                .setFooter(
                    `Komende użył: ${message.author.tag}`,
                    message.author.displayAvatarURL({ dynamic: true })
                  )
                  .setTimestamp()
            );
            }
        );
    },
};
