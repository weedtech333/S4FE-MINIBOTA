const fs = require('fs')

global.owner = "233" //owner number
global.footer = "ғᴀᴍᴏᴜs ᴛᴇᴄʜ" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['62']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/z40008.jpg"
global.OWNER_NAME = "@famous_tech" //
global.DEVELOPER = ["233209961490"] //
global.BOT_NAME = "ᴘʀᴇᴛᴛʏ-ᴍᴅ"
global.bankowner = "ғᴀᴍᴏᴜs ᴛᴇᴄʜ"
global.creatorName = "ғᴀᴍᴏᴜs ᴛᴇᴄʜ"
global.ownernumber = '7929085933'  //creator number
global.location = "Ghana,kumasi"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "ᴘʀᴇᴛᴛʏ-ᴍᴅ" //footer section
global.link = "https://whatsapp.com/channel/0029VbBSyvgDuMRmt1JTRY12"
global.autobio = true //auto update bio
global.botName = "ᴘʀᴇᴛᴛʏ-ᴍᴅ"
global.version = "1.0.0"
global.botname = "ᴘʀᴇᴛᴛʏ-ᴍᴅ"
global.author = "Famous Tech"
global.themeemoji = "🥷"
global.wagc = 'https://chat.whatsapp.com/CSPtSY6LZsaBkyhoD2GX4h?mode=gi_t'
global.thumbnail = 'https://files.catbox.moe/z40008.jpg'
global.richpp = ' '
global.packname = "ᴘʀᴇᴛᴛʏ-ᴍᴅ"
global.author = "ғᴀᴍᴏᴜs ᴛᴇᴄʜ"
global.creator = "233209961490@s.whatsapp.net"
global.ownername = 'ғᴀᴍᴏᴜs ᴛᴇᴄʜ' 
global.onlyowner = `Notice ⚠️: Only bot owners can use this Command 💜🥷`
  // reply 
global.database = `*To Exist In The Database Contact The Owner of this bot*`
  global.mess = {
wait: "*Configurating.......*",
   success: "*Successfully acknowledged ☑️*",
   on: "*Activated ✅*", 
   prem: "*Feature For Premium Users only 📛*", 
   off: "*Deactivated 📛*",
   query: {
       text: "*Please, Provide A Text Query 📑*",
       link: "Please, provide a valid link 🔗*",
   },
   error: {
       fitur: "*Status 🌐: Feature Or Command error ❌*",
   },
   only: {
       group: "*Notice ⚠️: Group only feature ❌*",
private: "*Notice ⚠️: Private chat feature only ❌*",
       owner: "*Notice ⚠️: Owner feature only ❌*",
       admin: "*Notice ⚠️: bot owner feature only ❌*",
       badmin: "*Notice ⚠️: Seek admin privilege's to use this command ❌*",
       premium: "*Notice ⚠️: Availabe for premium users only ❌*",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoviewstatus = false
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

//Property of Nexus Corp 
//owner number:+234902009026
//telegram :@Rfxdx
