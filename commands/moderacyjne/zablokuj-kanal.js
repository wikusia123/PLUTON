const { MessageEmbed } = require("discord.js");

module.exports = {
   name: "zablokuj-kanal",
   aliases: ['lock'],
   run: async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.channel.send(
    new MessageEmbed()
    .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
    .setDescription(`Brak permisji!`)
    .addField(`**Permisje:**`, `\`\`\`ini\n [ ZARZĄDZANIE KANAŁAMI ]\n\`\`\``)
    .setColor("FF0000")
    .setFooter(
    `Komende użył: ${message.author.tag}`,
message.author.displayAvatarURL({ dynamic: true })
)
.setTimestamp()
   )
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new MessageEmbed()
   .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES\n<:mod:858480386152464395> **__ZABLOKOWANO__ __KANAŁ__**`)
   .setDescription(`${message.channel} został zablokowany.`)
   .setColor('#00ff2f')
   .setFooter(
       `Komende użył: ${message.author.tag}`,
   message.author.displayAvatarURL({ dynamic: true })
 )
 .setTimestamp()
    await message.channel.send(embed);
}
}