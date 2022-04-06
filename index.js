

const DISCORD_TOKEN = ''; // get your bot specific Token - https://discordapp.com/developers/applications/me/create

const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: 'gen',
    unknownCommandResponse: true,
    disableEveryone: false
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['fun']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('Making Cute Cats!');
});

client.login(DISCORD_TOKEN);
