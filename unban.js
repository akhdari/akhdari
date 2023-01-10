module.exports = {
  name:'unban',
  description:"this is an unban command",
  async excute(client,message, args){
   const {member, mentions} = message
   if(
    member.hasPermission('ADMINISTRATOR')||
    member.hasPermission('BAN_MEMBERS')
   
   )if(!args[0])return message.channel.send("please specify a user to unban."));
   {
     const user=await message.channel.guild.members;unban(args[0]);
     return message.channel.send.send(`**${user.tag}** was banned.`)
   }
  }
}
