module.exports = {
  name:'kick',
  description:"this is a kick command",
  excute(client,message, args){
   const {member, mentions} = message
   const tag =`<@${member.id}>`
   const target = message.mentions.users.first();

   if(
    member.hasPermission('ADMINISTRATOR')||
    member.hasPermission('KICK_MEMBERS')
   ){
    if(target){
      const memberTarget= message.guild.members.cache.get(target.id);
      memberTarget.kick();
      message.channel.send(`${tag}, <@${memberTarget.user.id}> has been kicked.`);
    }else{
      message.channel.send(`${tag}please specify a valid user that you want to kick.`);
    }
   }else{
    message.channel.send(`${tag} you do not have the permission to use this command.`);
   }

  }
}
