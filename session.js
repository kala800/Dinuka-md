//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVA2L0ZZbTFJL3VLVVNaVllHd3FsTTZ5Z1hRSndUKzFqd25LcitWRHMzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmp4MW5MSm5qYzdsZ2NxYkhaZ3hhdE9uMHJEcFBsd1BxV0h3UkRxUjFtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTmhwQThjVzRIVFRpTmVpY1FKdjdHcWN5aXV2cXJkWEpnZ2ZzMmtlUEVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcVovTTJiZVFLNm1tZkhkVFR1ZFJmcGViRTA4ODM2MlpXNzNSRVQ4NXlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9POHJ3emt6ek52NDJQSXRGZW12YUZxYURZV2J3dHFyODl6NzFRRUtLMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkxV0R0V2tzRG9qSktiaUlWYnZiQURmWnh2TzErNkM2Q0hGVFp5S1JOZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEp3enBJVGtPelRiRUJzS3phZGhvUUNaRk90ZkFEVytFVVdodkpkcnhYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWR0Sm5mVk5Zb2YzL2NyMUxhRHNXM013eTh3bko0U0MxcWRudlo0WVhBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJRT1o1VUFYbUdqUWJJVklydi9EOEFjOEZ4eVg2MWpIOXhJVkFjK2Y4SzJzb25nNENqd3lmNnlGVVkxNGNsVkZINzJObVc5Rm8rN1VUWnJLM01iQmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IlZnT1RGbTY2R1JFV25zby82ZDErcCsyOExLaTdlQ01UZTlBNnJXVkt0bUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imlod0laUi1oUm91RUlVZGpFTUtXNlEiLCJwaG9uZUlkIjoiZDBhMzU5ZGUtN2U3MC00ZjczLThmNWMtYzNmMjdlYzUyMTI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI2M0VvTHRZdVZiNVhwZ3V2OEsvaVpjcm9ydz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MHcxcXpHTVVTV3pwOEhWMjFQVktVZXVGRWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDNYR1dCQUEiLCJtZSI6eyJpZCI6Ijk0NzQyOTczMjY1OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRpbnVrYSBmaWxtIiwibGlkIjoiMjA1MDI5NTQxNzEyMTA0OjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2Fzd3VRRUVPK24yTUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1ZGYWttamx6VkkvUWl0cTNXRStpY3pIbzV1RkJQZmwzVmNGQ3V6b1Zqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS2lnQ1JTWXVEYmpka20vbHhQVHovT05MMEM0cEk3cHhrVGVaMm10SStsWjdpUzR0VElLRXJ2emc4NFJNYWZ4ZjhaNml3ODBvdHVYUTgzYWxsSnhFQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1JNlpSRXRLbThJSk5HdVM5MTBTOHV5dFVVTk8vTEpWeklmVzJBTmRtaXkwWU9VVGw1VUl2TkREQmlsamNuQktsUStoZFZlMGswakh1cWw2bHhuRGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI5NzMyNjU6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2xSV3BKbzVjMVNQMElyYXQxaFBvbk14Nk9iaFFUMzVkMVhCUXJzNkZZNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUF3PT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDcxNjc1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxvTSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94742973265",
  PASSWORD: 
    process.env.PASSWORD || "dinuka12**",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
 
