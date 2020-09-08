const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
  const db = require("quick.db")
var prefix = ayarlar.prefix;
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;

  if(!message.member.roles.get("749419764602109984") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));

  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      var erkek = message.guild.roles.get("749419764589527128")
        var erkek2= message.guild.roles.get("749473862810468382")
      var kız = message.guild.roles.get("749419764589527129")
         var kız2 = message.guild.roles.get("750407009093812244")
        var kayıtsız = message.guild.roles.get("749419764589527126")
         

        
  if(!user) return message.reply ("Lütfen bir kullanıcı etiketleyiniz").then(m => m.delete(5000));
    let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir İsim Yazınız.").then(m => m.delete(5000));
        if(!erkek) return message.channel.send ("Erkek Rolü Yok").then(m => m.delete(5000));
  
  if(!kız) return message.channel.send ("Kız Rolü Yok").then(m => m.delete(5000));
    if(!kayıtsız) return message.channel.send ("Kayıtsız Rolü Yok").then(m => m.delete(5000));
   
     let sChannel = message.guild.channels.get("750101075398361198")

  
 if(user.roles.has(kayıtsız.id) && sChannel){
    setTimeout(function(){
   let embed = new Discord.RichEmbed()
    .setColor("#05022e")
    .setDescription(user.user+ " Aramıza Hoş Geldin , Senle Beraber **`"+ message.guild.memberCount +"`** Üyeye Ulaştık.")

   if(sChannel){
    sChannel.send(embed)
   }
    },1000)
 let KayıtEdilen = await db.fetch(`KayıtEdilen_${message.author.id}`)

 
    db.push(`KayıtEden_${message.guild.id}`,message.author.id)
  
    db.add(`KayıtSayısı_${message.author.id}`,1)
      db.add(`KızSayısı_${message.author.id}`,1)

    if(KayıtEdilen){

    if(KayıtEdilen.indexOf(user.id)!==-1){
   
      db.add(`SahteKayıt_${message.author.id}`,-1)
   
    }
      else {

    db.push(`KayıtEdilen_${message.author.id}`,user.id)
      
    db.set(`KayıtEden2_${user.id}`,message.author.id)
    }
    
    }  else {

    db.push(`KayıtEdilen_${message.author.id}`,user.id)
      
 //   db.set(`KayıtEden2_${user.id}`,message.author.id)
    }
    
  }
  
 if(user.user.username.includes("⨈")){
      await user.setNickname("⨈ " + reason);(e => console.log(e.message))
    }
    else if(!user.user.username.includes("⨈")){
      await user.setNickname("⨈ " + reason);(e => console.log(e.message))
    }
  
   await user.addRole(kız.id).catch(e => console.log(e.message))
      await user.addRole(kız2.id).catch(e => console.log(e.message))
    await (user.removeRole(erkek.id));
   await (user.removeRole(erkek2.id));
      await user.removeRole(kayıtsız.id).catch(e => console.log(e.message))
       
 setTimeout(() => {
   let embed = new Discord.RichEmbed()
    .setColor(kız.color)
   .setTitle('Kayıt Başarılı')
   .setThumbnail(user.user.avatarURL)
    .setDescription(`**
Kayıt edilen kullanıcı : ${user}
Kayıt işleminde verilen rol : <@&${kız.id}>
Yeni Kullanıcı Adı : \`${user.displayName}\`
**`)
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed)
   },1000)

    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kadın", "k"],
  permLevel: 0
};

exports.help = {
  name: 'kız',
  description: 'erkek rolü verir.',
  usage: 'a!man'
};
 