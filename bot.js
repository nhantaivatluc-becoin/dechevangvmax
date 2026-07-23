import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";


const bot = new TelegramBot(

process.env.BOT_TOKEN,

{
polling:true
}

);



const MINI_APP="https://app.dechevang.fun";



bot.onText(

/\/start/,

(msg)=>{


bot.sendMessage(

msg.chat.id,


`👑 ĐẾ CHẾ VÀNG ONLINE


🎮 Mini App chính thức

⚔ Pet

🏰 Bang Hội

🔥 PVP

💎 Gold - Diamond`,

{


reply_markup:{


inline_keyboard:[


[

{

text:"🎮 VÀO ĐẾ CHẾ VÀNG",

web_app:{

url:MINI_APP

}

}

]


]


}


}


);


}

);



console.log(

"👑 BOT ONLINE"

);

bot.onText(/\/app/, (msg)=>{

bot.sendMessage(
msg.chat.id,
"🎮 ĐẾ CHẾ VÀNG ONLINE",
{
reply_markup:{
inline_keyboard:[
[
{
text:"🎮 VÀO MINI APP MỚI",
web_app:{
url:"https://app.dechevang.fun"
}
}
]
]
}
}
);

});