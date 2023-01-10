var welcomeCanvas={}
welcomeCanvas.create=Canvas.createCanvas(1024,500)
welcomeCanvas.context=welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font='72px sans-serif';
welcomeCanvas.context.fillyStyle='#ffffff';

Canvas.loadImage("./img/bg.png").then(async(img)=>{
welcomeCanvas.context.drawImage(img, 0 ,1024 ,500)
  welcomeCanvas.context.fillText("welcome",360,360);
  welcomeCanvas.context.beginPath();
  welcomeCanvas.context.arc(512?166,128,0,Math.PI*2,true);
  welcomeCanvas.context.stroke()
  welcomeCanvas.context.fill()
})
Client.on('guildMemberAdd', async maember=>{
  const welcomechannel=Client.channels.cache.get('')
  let Canvas = welcomeCanvas;
  Canvas.context.font='42px sans-serif',
  Canvas.context.textAlign ='center';
  Canvas.context.fillText(maember.user.tag.toUpperCase(),512, 410)
  Canvas.context.font='32px sans serif'
  Canvas.context.fillText(`you are the ${member.guild.memberCount}th`,512,455)
  Canvas.context.beginPath()
  Canvas.context.arc(512,166,119,0,Math.PI*2,true)
  Canvas.context.closepath()
  Canvas.context.clip()
  await Canvas.loadImage(member.user.displayAvatarURL({format:'png',size:1024}))
  .then(img=>{
    Canvas.context.drawImage(img,393,47,238,238);

  })
  let atta = new Discord.MessageAttachment(Canvas.create.toBuffur(),`welcome-${member.id}.png`)
   try{
    welcomechannel.send(` :wave: Hello ${member},welcome to ${member.guild.name}!`,attachment)
   }catch(error){
 console.log(error)
   }
  
})
