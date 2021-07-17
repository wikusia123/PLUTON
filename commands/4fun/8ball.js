const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = require("../../config.json").prefix;

module.exports = {
    name : '8ball',
    usage : ' pytanie',
    run : async(client, message, args) => {
  const tresc = args.join(' ');
   if (!tresc) return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Podaj treść!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}8ball Zielino to idol? ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
)

      const answers = [
         "Tak jak ja to widzę, tak",
 "Zapytaj ponownie później",
 "lepiej ci teraz nie mówić",
 "Nie mogę teraz przewidzieć",
 "Skoncentruj się i zapytaj ponownie",
"Nie licz na to",
 "To pewne",
 "Zdecydowanie tak",
 "Najprawdopodobniej",
 "Moja odpowiedź brzmi nie",
 "Według moich źródeł, nie",
 "Perspektywa niezbyt dobra",
 "Perspektywa dobra",
 "Odpowiedz mgliście, spróbuj ponownie",
 "Znaki wskazujące na tak",
 "Bardzo wątpliwe",
 "Bez wątpienia",
 "Tak",
 "Tak – zdecydowanie",
 "Możesz na tym polegać,"
      ];
      const a = answers[Math.floor(Math.random() * answers.length)];

      return message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription('**8ball**')
        .addField(`Pytanie: ${tresc}`, `**Odpowiedz: ${a}**`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()

      )
    }
}
