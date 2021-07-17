const { MessageEmbed } = require("discord.js")

const Discord = require('discord.js');
module.exports = {
name: 'puchatek',
run: async(client, message, args) => {
 const split = args.join(" ").split("/")
        const text1 = split[0];
        const text2 = split[1];
if(!text1 || !text2) return message.channel.send(
            new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Aby to zadziałało, potrzebujesz 2 zdań oddzielonych \`/\`.`)
        .addField('**Przykład:**', '\`\`\`ini\n [ !puchatek Zielino/Zielino god ]\n\`\`\`')
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
)
   const Image = `https://api.popcatdev.repl.co/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
        const embed = new Discord.MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription('**Puchatek**\n')
        .setImage(Image)
        .setColor('#00ff2f')
        .setFooter(
          `Komende użył: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
        message.channel.send(embed);
    }
}
