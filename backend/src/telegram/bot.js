require("dotenv").config();

const Telegram = require("node-telegram-bot-api");

const TelegramBot = Telegram.default || Telegram;


console.log("BOT TOKEN:", process.env.BOT_TOKEN ? "OK" : "MISSING");


const bot = new TelegramBot(
    process.env.BOT_TOKEN,
    {
        polling:true
    }
);


bot.on("polling_error",(error)=>{

console.log("Telegram Error:",error.message);

});



bot.onText(/\/start/, (msg)=>{


bot.sendMessage(

msg.chat.id,

"👑 ĐẾ CHẾ VÀNG ONLINE\n\n🎮 Bấm nút để vào Mini App",

{

reply_markup:{

keyboard:[

[

{

text:"🎮 VÀO ĐẾ CHẾ",

web_app:{

url:"https://bonus-beef-treatments-sas.trycloudflare.com"

}

}

]

],

resize_keyboard:true

}

}

);


});


console.log("Telegram Bot Started");


module.exports=bot;

