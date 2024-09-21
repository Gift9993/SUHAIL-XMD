const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_45_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJYSkhHMHZBUFpmU0dCMUNIM2hhNjNRMTN1WXgwcUhsV2Jyc0ZrQlNIM2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExODEzOTA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDJCQzFCNDAwNjVDNUJGN0NGMkYwRjRDRTM4MzNDRDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTE5MTMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExODEzOTA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODUxOTlEMzJBMDFBQzBCQUU0N0FDRUJDQjg3MDE4MzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTE5MTMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhwcng1TEdPU2J1SVVZc3lHYS1VblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmQ2M2FkOGItNDU1Yy00NWRmLTgyY2EtN2I0NTY5YmM3ZGNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTczLFxuICAgICAgMTIyLFxuICAgICAgMTQ5LFxuICAgICAgMjEwLFxuICAgICAgMjQ4LFxuICAgICAgMjQwLFxuICAgICAgMzMsXG4gICAgICAxODgsXG4gICAgICAxMTcsXG4gICAgICAzNixcbiAgICAgIDE4MCxcbiAgICAgIDE3NSxcbiAgICAgIDIxNSxcbiAgICAgIDExMixcbiAgICAgIDI1NSxcbiAgICAgIDI0NixcbiAgICAgIDAsXG4gICAgICAxMTQsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDE2MCxcbiAgICAgIDI0NyxcbiAgICAgIDE4MCxcbiAgICAgIDEzMyxcbiAgICAgIDE4MixcbiAgICAgIDk3LFxuICAgICAgNjIsXG4gICAgICA4OSxcbiAgICAgIDAsXG4gICAgICAyMDAsXG4gICAgICAxMjUsXG4gICAgICAyMjgsXG4gICAgICA5OSxcbiAgICAgIDIzMyxcbiAgICAgIDEyOCxcbiAgICAgIDIxMixcbiAgICAgIDU0LFxuICAgICAgMjQwLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYUx4c3dHRU5IanVyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpySWcyKzl1YkRSM2gvcGtnc05ML2FSMzZaRlVRejVKMmxsTThSNzJQMG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlhFNGJuZ0p5UHRMODNObU12Y25CdUVRcEFNVHk2cG50WU5sV2x4Ykk4OHJqMEsrSklIdm9UaUV2QlViczlnL1R6Z042OUoxejJYV0ZRTHVWN01BQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidC82MTBUMXZvTFBGNWIxcGx2U3NCNm92d1ZGT0pSeldxbEZGUWEwWnd5dHV5c1Q5WGZoLytWM2YvWXFpSHY5dmRWMmF5TW0vN0JoMERtNkcxalVSZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE4MTM5MDQyOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2lmdM+vXCIsXG4gICAgXCJsaWRcIjogXCIzODkzNDI2NDQ1OTM0OTozM0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTgxMzkwNDI6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5MTkxMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFc2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVzZy5qc29uIjogIntcImtleURhdGFcIjpcIlRSM1hNMXhaMDFSWWF0QjVQN2d4VUVaa2NsRXdlRXJ5TmdsVStlWTY3Snc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MTE0NDYxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2OTE5MTMxNzcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
