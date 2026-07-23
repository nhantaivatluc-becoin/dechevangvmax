import "./NotificationBar.css";

import {useEffect,useState} from "react";


export default function NotificationBar(){


const [text,setText]=useState(
"🔥 Người chơi mới vừa gia nhập Đế Chế Vàng"
);



const players=[

"DragonKing",

"VuaVang",

"GoldMaster",

"RongVang",

"Kiên"

];



useEffect(()=>{


const timer=setInterval(()=>{


const name=

players[
Math.floor(Math.random()*players.length)
];



setText(

"🔥 "+name+" vừa nhận thưởng Đế Chế Vàng 🎁"

);



},60000);



return()=>clearInterval(timer);



},[]);



return(


<div className="notify-box">


<div className="notify-run">

{text}

</div>


</div>


)


}
