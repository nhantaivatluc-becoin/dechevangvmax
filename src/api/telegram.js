export function getTelegramUser(){


if(window.Telegram?.WebApp){


const user=

window.Telegram.WebApp.initDataUnsafe?.user;



return user || null;



}



return null;


}




export function initTelegram(){



if(window.Telegram?.WebApp){



window.Telegram.WebApp.ready();



window.Telegram.WebApp.expand();



}



}

