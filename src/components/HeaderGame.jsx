import React,{useEffect,useState} from "react";
import "./HeaderGame.css";



export default function HeaderGame(){



const [user,setUser]=useState({});


const [flash,setFlash]=useState(false);







function loadUser(){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);





// Telegram Mini App

if(

window.Telegram &&

window.Telegram.WebApp

){



let tg=

window.Telegram.WebApp;



let tgUser=

tg.initDataUnsafe?.user;



if(tgUser){



data.telegramId=

tgUser.id;



data.username=

tgUser.username ||

tgUser.first_name;



localStorage.setItem(

"user",

JSON.stringify(data)

);



}


}





setUser(data);


}







useEffect(()=>{


loadUser();



function update(){



setFlash(true);


loadUser();



setTimeout(()=>{


setFlash(false);


},500);


}



window.addEventListener(

"financeUpdate",

update

);



return()=>{


window.removeEventListener(

"financeUpdate",

update

);



}


},[]);








return(



<div className="game-header">





<div className="avatar">


👤


</div>







<div className="player-info">


<h3>

{user.username || "Người chơi"}

</h3>


<div className="vip">


👑 VIP {user.vip||0}

</div>


</div>









<div className="resources">





<div className={flash?"resource flash":"resource"}>

🪙

{Number(user.gold||0).toFixed(2)}

</div>





<div className={flash?"resource flash":"resource"}>

💎

{Number(user.diamond||0).toFixed(2)}

</div>






<div className={flash?"resource flash":"resource"}>

💵

{Number(user.vnd||0).toLocaleString()}

</div>





</div>







</div>


)



}
