const ADMIN_IDS=[

"8454844333"

];


export function checkAdmin(){

let id="";


try{


id =

window.Telegram
?.WebApp
?.initDataUnsafe
?.user
?.id
?.toString()
||
"";


}catch(e){}



return ADMIN_IDS.includes(id);


}



export default checkAdmin;
