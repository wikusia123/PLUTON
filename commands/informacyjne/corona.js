const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "corona",
  category: "info",
  description: "Zobacz statystyki corona-virusa",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    let link;
    let embed = new MessageEmbed();

    if (!args[0] || args[0].match(/all|global|globe|world/gi)) {
      let jsonData = await fetch("https://disease.sh/v3/covid-19/all");
      jsonData = await jsonData.json();
      embed
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES\nSprawy globalne`)
        .setColor('#00ff2f')
        .setDescription("Czasami liczba spraw może różnić się od niewielkiej kwoty.")
        .addField("Wszystkie sprawy", jsonData.cases.toLocaleString(), true)
        .addField("Całkowita liczba zgonów", jsonData.deaths.toLocaleString(), true)
        .addField("Razem odzyskane", jsonData.recovered.toLocaleString(), true)
        .addField("Dzisiejsze przypadki", jsonData.todayCases.toLocaleString(), true)
        .addField("Dzisiejsze zgony", jsonData.todayDeaths.toLocaleString(), true)
        .addField("Aktywne przypadki", jsonData.active.toLocaleString(), true)
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp();
        
    } else {
      let jsonData = await fetch(
        `https://disease.sh/v3/covid-19/countries/${args.join(" ")}`
      );
      jsonData = await jsonData.json();

      if (!jsonData.country)
        return message.reply(
          "Nie mogę uzyskać szczegółów **" + args[0] + "**"
        );

      embed
        .setTitle(`<a:6093_Animated_Checkmark:780545344785219594> SUKCES\nKraj: ${jsonData.country.toUpperCase()}`)
        .setColor('#00ff2f')
        .setDescription("Czasami liczba spraw może różnić się od niewielkiej kwoty.")
        .setThumbnail(jsonData.countryInfo.flag || "")
        .addField("Wszystkie sprawy", jsonData.cases.toLocaleString(), true)
        .addField("Całkowita liczba zgonów", jsonData.deaths.toLocaleString(), true)
        .addField("Razem odzyskane", jsonData.recovered.toLocaleString(), true)
        .addField("Dzisiejsze przypadki", jsonData.todayCases.toLocaleString(), true)
        .addField("Dzisiejsze zgony", jsonData.todayDeaths.toLocaleString(), true)
        .addField("Aktywne przypadki", jsonData.active.toLocaleString(), true)
        .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp();
    }

    return message.channel.send(embed).catch((err) => {
      return message.reply("Coś poszło nie tak. Proszę spróbować później.");
    });
  },
};