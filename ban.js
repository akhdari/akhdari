module.exports = {
  name:'ban',
  description:"this is a ban command",
  excute(client,message, args){
   const {member, mentions} = message
   const tag =`<@${member.id}>`
   const target = message.mentions.users.first();

   if(
    member.hasPermission('ADMINISTRATOR')||
    member.hasPermission('BAN_MEMBERS')
   ){
    if(target){
      const memberTarget= message.guild.members.cache.get(target.id);
      memberTarget.ban();
      message.channel.send(`${tag}, <@${memberTarget.user.id}> has been banned.`);
    }else{
      message.channel.send(`${tag}please specify a valid user that you want to ban.`);
    }
   }else{
    message.channel.send(`${tag} you do not have the permission to use this command.`);
   }

  }
}
