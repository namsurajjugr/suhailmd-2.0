const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_11_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUwM20rT2RoV04vK0xiZFQ3Y2JPSXZBbjlqUzJ5Yy9XZklUeW4zc2hlYlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhuLUVCaFpaVFR1Q09ydkotSEVJZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTRiZDVmNjYtNmRkMC00MWFiLTkwNTQtMjA5OGZjM2Y0MzljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMjMzLFxuICAgICAgMTM1LFxuICAgICAgMTk0LFxuICAgICAgNDQsXG4gICAgICAyMzAsXG4gICAgICA2MyxcbiAgICAgIDExMCxcbiAgICAgIDMzLFxuICAgICAgMzUsXG4gICAgICA0MyxcbiAgICAgIDE0OCxcbiAgICAgIDE1NSxcbiAgICAgIDE2NixcbiAgICAgIDE3NixcbiAgICAgIDk4LFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICA1LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAyNTAsXG4gICAgICA1MCxcbiAgICAgIDcyLFxuICAgICAgMTcsXG4gICAgICAyMDUsXG4gICAgICAxNjEsXG4gICAgICAyMzksXG4gICAgICAxNjQsXG4gICAgICAyMTksXG4gICAgICAyNDAsXG4gICAgICA5NSxcbiAgICAgIDE4MixcbiAgICAgIDEwNCxcbiAgICAgIDQsXG4gICAgICA5NCxcbiAgICAgIDExNSxcbiAgICAgIDksXG4gICAgICAxNCxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0NldFSFdFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDI2MzU5NTk0OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDY5MzU5NzAzNDEwNDI6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhqenBzREVLUFoycnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKTVZOak1zVnNUc25ybS82QkFFTjhIVmdJR0trNER4RUJEMFpEZVM3UW1zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVFZnBlTTFXVzNiQTlEb2ZIeDVMT1BLVElqTmZOdTV3TXJrM0JXQ29XNk54MmJ2Q05HZThDallpenlKbU1oQTQyaFJ5QThxOU1CUEVicUdrU1pIc0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRIc0NQQWZNb1RPZG0rUVhSdE8yTWdkQ01qVnp3ZDlxZElTeS9HZndvYlVDc3E5bU5lbGZodTdUL2ZaakRuOFBvS0RETlQ4ZS9TTUpXeXl1d3NUc2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyNjM1OTU5NDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgzMDY5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlkYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWRiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUdpQURkOUZ0MVBoOW9UU1VSMit4ai9kTFVOZVFZRFBHWVhGY2c4ZWNQUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjMyMjAxNzYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4Mjg5MDU5NDRcIn0iCn0="  // PUT your SESSION_ID 


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
