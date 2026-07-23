require("dotenv").config();


const TelegramBotPackage = require("node-telegram-bot-api");


const TelegramBot =

TelegramBotPackage.default || TelegramBotPackage;



const CHANNEL_ID = "@DeCheVangOfficial";


const bot = new TelegramBot(

process.env.BOT_TOKEN,

{

polling:false

}

);



async function sendChannel(message){


try{


await bot.sendMessage(

CHANNEL_ID,

message,

{

parse_mode:"HTML"

}

);



console.log(
"✅ Gửi Channel thành công"
);



}


catch(error){


console.log(

"❌ Lỗi Channel:",

error.message

);


}


}



module.exports={

sendChannel

};


