const { MessageEmbed } = require("discord.js")
const moment = require('moment');

module.exports = {
        name: "profil",
        usage: "@Oznaczenie/ID",
        aliases: ['ui', 'userinfo'],
    run: async (bot, message, args) => {
        var permissions = [];
        var acknowledgements = 'Nie';

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
        const user = message.mentions.users.first() || message.author;

        const status = {
            online: "<:online:858416412522709002>",
            idle: "<:idle:858416452117594152>",
            dnd: "<:dnd:858416414482235413>",
            offline: "<:offline:858416426297983027>"
        };

        const flags = {
	          DISCORD_EMPLOYEE: '<:discord_eMPLOYEE:858768308925104128>',
	          DISCORD_PARTNER: '<:dsc_partner:858768311462658060>',
	          BUGHUNTER_LEVEL_1: '<:bughunter_level_1:858768318315888650>',
	          BUGHUNTER_LEVEL_2: '<:bughunter_level_2:858768321389789215>',
	          HYPESQUAD_EVENTS: '<:house_events:858765964581273630>',
	          HOUSE_BRAVERY: '<:house_bravery:858765973040660521>',
	          HOUSE_BRILLIANCE: '<:house_brilliance:858765969441423361>',
	          HOUSE_BALANCE: '<:house_balance:858765978765885471>',
	          EARLY_SUPPORTER: '<:Early_Supporter:858767873211498496>',
	          VERIFIED_DEVELOPER: '<:discord_developer_bot:858766771351715860>'
        };

        const userFlags = user.flags.toArray();
 

        if(member.hasPermission("KICK_MEMBERS")){
            permissions.push("Wyrzucanie użytkowników");
        }
        
        if(member.hasPermission("BAN_MEMBERS")){
            permissions.push("Banowanie użytkowników");
        }
        
        if(member.hasPermission("ADMINISTRATOR")){
            permissions.push("Administrator");
        }
    
        if(member.hasPermission("MANAGE_MESSAGES")){
            permissions.push("Zarządzanie wiadomościami");
        }
        
        if(member.hasPermission("MANAGE_CHANNELS")){
            permissions.push("Zarządzanie kanałami");
        }
        
        if(member.hasPermission("MENTION_EVERYONE")){
            permissions.push("Pingowanie @everyone");
        }
    
        if(member.hasPermission("MANAGE_NICKNAMES")){
            permissions.push("Zarządzanie pseudonimami");
        }
    
        if(member.hasPermission("MANAGE_ROLES")){
            permissions.push("Zarządzanie rolami");
        }
    
        if(member.hasPermission("MANAGE_WEBHOOKS")){
            permissions.push("Zarządzanie webhooks");
        }
    
        if(member.hasPermission("MANAGE_EMOJIS")){
            permissions.push("Zarządzanie emotkami");
        }
    
        if(permissions.length == 0){
            permissions.push("Brak permisji");
        }
    
        if(member.user.id == message.guild.ownerID){
            acknowledgements = 'Tak';
        }
    
        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .addField('**Dołączył:**',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
            .addField('**Utworzył konto:**', member.user.createdAt.toLocaleString())
            .addField(`**Role [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]:**`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(", ") || "`Brak ról`"}`)
            .addField("**Właściciel serwera?** ", `${acknowledgements}`)
            .addField('**Odznaki:**', `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : '`Brak odznak`'}`, true)
            .addField("**Permisje:**", `${permissions.join(`, `)}`)
            .setColor('#00ff2f')
            .setFooter(
                `Komende użył: ${message.author.tag}`,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp();
              
        message.channel.send(embed);
    
    }
    }
