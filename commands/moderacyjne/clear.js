const Discord = require("discord.js");
const prefix = require("../../config.json").prefix;

module.exports = {
  name : 'clear',
  description : 'Czyści wiadomości.',
  run : async(client, message, args) => {
      const amount = args.join(" ");
 
      if(!amount) return message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setColor("FF0000")
        .setDescription("Podaj ile wiadomości ma usunąć bot!")
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}clear 20]\n\`\`\``)
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Brak permisji!`)
        .addField('**Permisje:**', `\`\`\`ini\n [ ZARZĄDZANIE WIADOMOŚCIAMI ]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()    
          )
    
        if(amount > 100) return message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Mogę wyczyścić max 100 wiad.!`)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()
 
        )
 
        if(amount < 1) return message.channel.send(
            new Discord.MessageEmbed()
        .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
        .setDescription(`Wyczyść przynajmniej jedną wiadomość!`)
        .addField('**Przykład:**', `\`\`\`ini\n [ ${prefix}clear 20]\n\`\`\``)
        .setColor("FF0000")
        .setFooter(
        `Komende użył: ${message.author.tag}`,
    message.author.displayAvatarURL({ dynamic: true })
  )
  .setTimestamp()) 
 
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
 
 
    message.channel.send(
        new Discord.MessageEmbed()
								.setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`Wyczyszczono ${amount} wiadomości!`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      )
            }  
          }
