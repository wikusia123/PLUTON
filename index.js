const { Collection, Client, Discord } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const distube = require('distube')
const db = require("quick.db")
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true })
client.distube
	.on('playSong', (message, queue, song) => message.channel.send(
		new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`**\:musical_note: Odtwarzanie utworu \:musical_note:**`)
        .addField('**Długiość Piosenki**', `\`${song.formattedDuration}\``)
        .addField('**Nazwa utworu**', `\`${song.name}\``)
        .addField('**Dodał(-a)**', `${song.user}`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
	))
	.on('addSong', (message, queue, song) => message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`**\:musical_note: Kolejka utworów \:musical_note:**`)
        .addField('**Długiość Piosenki**', `\`${song.formattedDuration}\``)
        .addField('**Nazwa utworu**', `\`${song.name}\``)
        .addField('**Dodał(-a)**', `${song.user}`)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
        ))
	.on('playList', (message, queue, playlist, song) => message.channel.send(
                new MessageEmbed()
    .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
    .setDescription(`**\:musical_note: Playlisty \:musical_note:**`)
    .addField('**Nazwa utworu**', `\`${playlist.name}\``)
    .addField('**Lista odtwarzania**', `\`${playlist.songs.length} utworów\``)
    .addField('Długość utworów', `\`${song.formattedDuration}\``)
    .addField('**Dodał(-a)**', `\`${song.user}\``)
    .setColor('#00ff2f')
    .setFooter(
        `Komende użył: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp())
    )
	.on('addList', (message, queue, playlist) => message.channel.send(
        new MessageEmbed()
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES`)
        .setDescription(`**\:musical_note: Playlisty \:musical_note:**`)
        .addField('**Nazwa utworu**', `\`${playlist.name}\``)
        .addField('**Lista odtwarzania**', `\`${playlist.songs.length} utworów\``)
        .addField('Długość utworów', `\`${song.formattedDuration}\``)
        .addField('Pozycja', `\`${queue}\``)
        .addField('**Dodał(-a)**', `\`${song.user}\``)
        .setColor('#00ff2f')
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp())
	)
    .on('error', (message, e) => {
		console.error(e)
		message.channel.send(`Wystąpił błąd: ${e}`)
	})

       client.on('ready', () => {
        const StatusList = [
            `${prefix}help`,
            `[1] GUILDS: ${client.guilds.cache.size}`,
	    `[2] USERS: ${client.users.cache.size}`]
        setInterval(() => {
            const index = Math.floor(Math.random() * (StatusList.length - 1) + 2);
            client.user.setActivity(StatusList[index]);
          }, 5000)
        console.log(`${client.user.username} ✅`)
    })
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on("guildMemberAdd", (member) => {
    let chx = db.get(`welchannel_${member.guild.id}`);    
    if(chx === null) { 
      return;
    }

    let wembed = new MessageEmbed()
    .setTitle(`Nowy użytkownik!`)
    .setColor('#00ff2f')
    .setImage('https://cdn.discordapp.com/attachments/722136991810060380/864323164010971136/witamy.png')
    .setDescription(`Witaj <@${member.user.id}> na serwerze **${member.guild.name}**.`)
    .setTimestamp(new Date)    
    client.channels.cache.get(chx).send(wembed)
  })

  client.on("guildMemberRemove", (member) => {
    let chx = db.get(`goodchannel_${member.guild.id}`);    
    if(chx === null) { 
      return;
    }

    let wembed = new MessageEmbed()
    .setTitle(`Użytkownik wyszedł!`)
    .setColor('#00ff2f')
    .setImage('https://cdn.discordapp.com/attachments/722136991810060380/864328619958206485/zegnamy.png')
    .setDescription(`Żegnaj <@${member.user.id}>, będzie nam ciebie brakować.`)
    .setTimestamp(new Date)    
    client.channels.cache.get(chx).send(wembed)
  })

client.login(token)
