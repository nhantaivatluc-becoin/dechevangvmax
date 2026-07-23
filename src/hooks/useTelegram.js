export default function useTelegram(){


const tg = window.Telegram?.WebApp;


if(tg){

tg.ready();

}



const user = tg?.initDataUnsafe?.user;



return {

telegramId:user?.id ? String(user.id) : null,

username:user?.username || "",

firstName:user?.first_name || ""

};


}

