const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349016548736";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349016548736";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_15_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjV0WTFRTDc2cDFiL0dlOG5qUzkxei9WRU55VjRCMC9qYlUzZyt4dVp3dWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRUTzl4UGlGUnNxeWc1dXpLam4ybHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmE4NDM2MTgtNDFhMS00NDViLTkwYzMtNTYyMDA2NmUzNzQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNCxcbiAgICAgIDIzNSxcbiAgICAgIDEwNyxcbiAgICAgIDEyMCxcbiAgICAgIDE4OCxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgMTUwLFxuICAgICAgNzIsXG4gICAgICAyMjEsXG4gICAgICAxODcsXG4gICAgICAyMTEsXG4gICAgICAyNDIsXG4gICAgICAwLFxuICAgICAgMTM3LFxuICAgICAgMTA3LFxuICAgICAgNDYsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTAzLFxuICAgICAgMTk5LFxuICAgICAgMTk0LFxuICAgICAgMjAwLFxuICAgICAgMTMwLFxuICAgICAgMTE2LFxuICAgICAgMTc3LFxuICAgICAgMTk4LFxuICAgICAgOTQsXG4gICAgICA3MSxcbiAgICAgIDEzMixcbiAgICAgIDIwMyxcbiAgICAgIDE3MSxcbiAgICAgIDEyLFxuICAgICAgOTEsXG4gICAgICAyNDksXG4gICAgICA4OSxcbiAgICAgIDc2LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUw1UFdYSkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTY1NDg3MzY6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOb3dlbGx6IHR2XCIsXG4gICAgXCJsaWRcIjogXCIyNDE2NjUzMTA3MzIzMTg6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZNNTRBRUVLL0svN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0RlZHOHd6TEwxTlh1Q3FsQm40ZDZPTXRuNTlmN2wyNmJYTHkxVW16RENVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhTVW1BaithN0RIdTRoWUkyMnRFOGVseEN1dkVkdGsrSjAyUGFNSHI3S2M5ZjQ2MmY2cXp0VDJyak9mVUZKbUt5NFdBenMrS041WXUyRTZCcVpjVkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndJVm1oc2cxYnFwOWJzOUt3VlF2ZE1rdk1iRmcyNDZOVFBTRDdzZlp5Y1Vld2JjeVR1OEtPSFZJcTFIY1RqZlVOMk9pbTF5RzAxOUhGR21ac2RESmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTY1NDg3MzY6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc1NDkzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpSb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlJvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUTdwbGd0UnZSZlNqRWRWV2laWkNqbmJsWFBtaTRDQ0pRRTk5NVJvSm5tZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NDMwOTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzU0ODY2MTYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
