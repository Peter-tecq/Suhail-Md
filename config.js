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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064653378";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349064653378";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_07_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdGNmcxR09FdXFmbkxVbHA0VHhnbVRUcmZxQ1ZJTVN4c09oYjhIUzB2N0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFhRGd5c290UjJDS3JCWTBLU1VNTHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWFiZjlmZGUtYTExYy00ZjIyLWI4ZmEtY2NkOTQ4MDZlYzRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTAsXG4gICAgICAxMCxcbiAgICAgIDQzLFxuICAgICAgNDgsXG4gICAgICAxNjksXG4gICAgICAxMjYsXG4gICAgICAxMjksXG4gICAgICAyMTAsXG4gICAgICA5NSxcbiAgICAgIDE3NixcbiAgICAgIDEzMCxcbiAgICAgIDIwNyxcbiAgICAgIDEwNixcbiAgICAgIDE3LFxuICAgICAgMjAwLFxuICAgICAgMTY3LFxuICAgICAgMTQ2LFxuICAgICAgMjIsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxOTYsXG4gICAgICAxMTUsXG4gICAgICA0MyxcbiAgICAgIDIwMSxcbiAgICAgIDYxLFxuICAgICAgMSxcbiAgICAgIDExNixcbiAgICAgIDE1OSxcbiAgICAgIDExMSxcbiAgICAgIDIwLFxuICAgICAgOTAsXG4gICAgICAxMDEsXG4gICAgICAyNSxcbiAgICAgIDY0LFxuICAgICAgMTQsXG4gICAgICA0MixcbiAgICAgIDksXG4gICAgICAyNTQsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UktEVFdLUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDY1MzM3ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2MjYwOTM5NTMwMzAyOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyVDlhd0hFTEhsL2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWJhRThDdWZraUNWQXdpUzRVSFpNTmM0U2xaa3cwVjFmcUIwcExFRVdHTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWExIUU9hMzgvdDlJYWorMExrbURCay9LV3lQc0RJOGNvKzlyZlNzWE1VUXdRaHA4NUkzNHptaUxUSElGNmxVUWZCTkZwYS9EVUxFQmNHSkZhMUREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYSmIzTTY0SjhDcVVJU2RvdVY5LzA5RC9DUXJBV2lzZUtNQTN0bEN3MTJZUEtKMUNKQjR2MWJKa3c4d1FRTndQdC9Ec1NqaDgxWlRDUVZ1WVB6QlVCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0NjUzMzc4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcyNTYyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
