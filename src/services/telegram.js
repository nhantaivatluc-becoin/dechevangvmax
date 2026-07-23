export function initTelegram(){

try{

const tg = window.Telegram?.WebApp;

if(!tg){
console.log("Không chạy trong Telegram");
return null;
}


tg.ready();

tg.expand();


return tg;


}catch(e){

console.log("Telegram init error",e);

return null;

}


}



export function getTelegramUser(){

try{

const tg = window.Telegram?.WebApp;


if(!tg){
return null;
}


const user=tg.initDataUnsafe?.user;


if(!user){
return null;
}


return {

telegramId:String(user.id),

username:user.username || user.first_name || "Miner"

};


}catch(e){

console.log("getTelegramUser error",e);

return null;

}


}
