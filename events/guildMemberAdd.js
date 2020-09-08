const Discord = require('discord.js');
const db = require("quick.db")
module.exports =async (member) => {
   
var süp = member.guild.roles.get("749419764589527124")
var kayıtsız = member.guild.roles.get("749419764589527126")
     let sChannel = member.guild.channels.get("750115654388023426")
        let kanal = member.guild.channels.get("750115654388023426")
function  sunucuyakayıt(){
       
     
            member.setNickname("⨈ İsim ' Yaş")
        if(!kayıtsız) return member.guild.owner.send("kayıtsız rolü olmadığı için rol verilemedi")
        setTimeout(async() => {
          let kisirolleri =  await db.fetch(`Karantinaroller_${member.id}`)
       
          if(kisirolleri ==="Karantina"){
             member.addRole(süp.id)
            member.removeRole(kayıtsız.id)
          }else{
        member.addRole(kayıtsız.id)
          }
    },2000)
        if(!sChannel) return member.guild.owner.send("kayıt kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
 setTimeout(() => {
/*  let embed1 = new Discord.RichEmbed()
  .setColor("#0ccfe4")
 .setDescription(`<a:11:650869379910598664> **WELCOME TO SHANNARA

<a:selam:634472547320332301> Hoşgeldin, ${member} Seninle ${member.guild.memberCount} Kişiyiz!
<a:tik:634472545898332220> Kaydının yapılması için sesli odaya gelip ses vermen gerekli.
<a:kalpcikk:634472515690954767> Kayıt sorumluları seninle ilgilenecektir.
<a:yildiz:634471303281246215> Kayıt Sorumluların robot olmadığından emin olup lütfen beklemede kalın.
<a:shannara1:634471406117060621> <#634438749576495104> Kanalından Kurallar'ı okumayı ihmal etmeyin. 
<@&634438731130208257> <@&634438730706452500> <@&634438729976512532>
<a:tik:634472545898332220> Hesap Güvenli.**
`)*/
  sChannel.send(`<a:elegant_sweetie:749575418243186761> **Elegant Sunucusuna Hoşgeldin

<a:elegant_loading:749432727861854328> Hoşgeldin, ${member} Seninle ${member.guild.memberCount} Kişiyiz!
<a:elegant_cark:749573196017041488> Kaydının yapılması için sesli odaya gelip ses vermen gerekli.
<a:elegant_catmood:749578376846508052> Kayıt sorumluları seninle ilgilenecektir.
<a:elegant_sweetie:749575418243186761> <#749419764975140967> Kanalından Kurallar'ı okumayı ihmal etmeyin. 
<a:elegant_kalpcik:750428522194927666> <@&749419764589527126> <@&749419764602109984>
<a:elegant_onay:749432637289922612> Hesap Güvenli.**
`)
    },500)
    }

var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
     member.addRole(süp.id)
     setTimeout(() => {
     member.removeRole(kayıtsız.id)
     },2000)
     
    if(!sChannel) return member.guild.owner.send("kayıt kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
 /* let embed1 = new Discord.RichEmbed()
  .setColor("#ff0000")
 .setDescription(`<a:11:650869379910598664> **Elegant Sunucusuna Hoşgeldin

<a:129:650870745848872971> Hoşgeldin, ${member} Seninle ${member.guild.memberCount} Kişiyiz!
<a:129:650870745848872971> Kaydının yapılması için sesli odaya gelip ses vermen gerekli.
<a:129:650870745848872971> Kayıt sorumluları seninle ilgilenecektir.
<a:129:650870745848872971> Kayıt Sorumluların robot olmadığından emin olup lütfen beklemede kalın.
<a:129:650870745848872971> <#634438749576495104> Kanalından Kurallar'ı okumayı ihmal etmeyin. 
<@&634438731130208257> <@&634438730706452500> <@&634438729976512532>
<a:129:650870745848872971> Yeni Açılmış Hesap Tespit edildi.**
`)*/
     if(kanal){
     kanal.send(member + " **Hesabınız Yeni Açıldığı İçin Karantinaya Atıldınız. Buradan Çıkmak İçin Bir Yetkiliye Ulaşın Teşekkürler. **<a:elegant_unlem:749432548886708255>")
     }
       sChannel.send(`<a:elegant_unlem:749432548886708255> **Elegant Sunucusuna Hoşgeldin

<a:elegant_unlem:749432548886708255> Hoşgeldin, ${member} Seninle ${member.guild.memberCount} Kişiyiz!
<a:elegant_unlem:749432548886708255> Kaydının yapılması için sesli odaya gelip ses vermen gerekli.
<a:elegant_unlem:749432548886708255> Kayıt sorumluları seninle ilgilenecektir.
<a:elegant_unlem:749432548886708255> <#634438749576495104> Kanalından Kurallar'ı okumayı ihmal etmeyin. 
<a:elegant_unlem:749432548886708255> <@&749419764589527126> <@&749419764602109984>
<a:elegant_unlem:749432548886708255> Yeni Açılmış Hesap Tespit edildi.**
`)
   }else{
        sunucuyakayıt()
   }
}