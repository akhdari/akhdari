const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(client, message, args){
        const { member, mentions} = message
        const tag = `<@${member.id}>`
        const target = message.mentions.users.first();
        if (
            member.hasPermission('ADMINISTRATOR') ||
              member.hasPermission('MANAGE_ROLES')
        ) {
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
           if(!args[1]){

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${tag}, <@${memberTarget.user.id}> has been muted.`);
            return
           }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${tag}, <@${memberTarget.user.id}> has been muted for **${ms(ms(args[1]))}**.`);

            setTimeout (function (){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);

            }, ms(args[1]));
        }else{
            message.channel.send(`${tag}, Please specify a user to mute.`);
        }
     } else {
            message.channel.send( `${tag}, You do not have permission to use that command.`);
        
        }
    }
}
