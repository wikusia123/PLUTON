const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  description: "zobacz wszystkie komendy",
  run: async (client, message, args) => {

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Komenda nie ma nazwy. ||Prawdopodobnie błąd w kodzie.||";

          let name = file.name.replace(".js", "");

          return `\`${name}\`,`;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "W trakcie." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("<:pomoc:858482543719612437> Potrzebujsz pomocy? Oto wszystkie moje polecenia:")
        .addFields(categories)
        .setDescription(
          `Użyj \`${prefix}help\` po którym następuje nazwa polecenia, aby uzyskać więcej dodatkowych informacji o poleceniu. Użyj Na przykład: \`${prefix}help ascii\`.`
        )
        .setFooter(
          `Komende użył: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor('#00ff2f')
        return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`<a:1603_Animated_Cross:780545335151558656> ERROR`)
          .setDescription(`Niepoprawna komenda! Użyj \`${prefix}help\`, aby zobaczyć wszystkie moje polecenia!`)
          .setColor("FF0000")
          .setFooter(
            `Komende użył: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Szczegóły polecenia:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "KOMENDA:",
          command.name ? `\`${command.name}\`` : "Brak nazwy dla tego polecenia."
        )
        .addField(
          "SKRÓTY:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Brak skrótów dla tego polecenia."
        )
        .addField(
          "UŻYCIE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "OPIS:",
          command.description
            ? command.description
            : "Brak opisu dla tego polecenia."
        )
        .setFooter(
          `Komende użył: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor('#00ff2f')
        return message.channel.send(embed);
    }
  },
};
