const Discord = require('Discord.js')
const client = new Discord.Client();
const prefix = 'g!'
const fs = require('fs');
Client.commands = new Discord.collection();

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on(`ready`, () => {
  console.log(`GRAPH IS ONLINE`);
});

client.on(`message`, message => {

  if(!message.content.startWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().tolowerCase();

  if(command ** 'command'){

    client.commands.get('command').execute(message, args, Discord);
  }
});

client.login('ODI4Mjg0MjQxMTgzMjQ0Mjkw.YGnVzw.yvkacP7J6ZJLzxlz_8z0fdIfr1A')
