const API_URL =
import.meta.env.VITE_API_URL ||
"http://localhost:3000";



export async function saveTelegramPlayer(user){


try{


const response = await fetch(
`${API_URL}/api/telegram/sync`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

telegramId:user.id,

username:
user.username ||
user.first_name ||
"Miner"

})

}
);



const result = await response.json();



if(result.success){


const player={

telegramId:
String(result.user.telegramId),

username:
result.user.username || "Miner",

gold:
Number(result.user.gold),

diamond:
Number(result.user.diamond),

vip:
result.user.vip,

invite:
result.user.invite

};



localStorage.setItem(
"dechevang_player",
JSON.stringify(player)
);



return player;


}



}catch(error){


console.log(
"Sync telegram error:",
error
);



}



return null;


}




export function getPlayer(){


const data =
localStorage.getItem(
"dechevang_player"
);


return data
?
JSON.parse(data)
:
null;


}
