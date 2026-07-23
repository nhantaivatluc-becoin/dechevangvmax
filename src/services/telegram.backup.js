const tg = window.Telegram?.WebApp;


export function initTelegram(){

    if(!tg){
        console.log("Không ch?y trong Telegram");
        return null;
    }


    tg.ready();
    tg.expand();


    return tg;
}



export function getTelegramUser(){

    if(!tg) return null;


    return tg.initDataUnsafe?.user || null;

}


export default tg;
