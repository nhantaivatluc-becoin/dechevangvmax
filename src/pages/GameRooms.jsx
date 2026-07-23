import React,{useEffect,useState} from "react";

import {useNavigate} from "react-router-dom";

import {socket} from "../services/socket";

import "./GameRooms.css";



export default function GameRooms(){


const nav=useNavigate();


const [online,setOnline]=useState(0);



useEffect(()=>{


socket.on(

"online_count",

(num)=>{

setOnline(num);

}

);



return()=>{

socket.off("online_count");

}


},[]);




const rooms=[


{
id:"chess",
name:"🎲 Cờ Cá Ngựa",
fee:"100 Gold"
},


{
id:"card",
name:"🃏 Tiến Lên",
fee:"500 Gold"
},


{
id:"fish",
name:"🐟 Bắn Cá",
fee:"5 Diamond"
},


{
id:"battle",
name:"⚔ Chiến Trường",
fee:"1000 Gold"
}


];



return(


<div className="game-page">


<h1>

🌎 GAME ONLINE

</h1>


<h3>

🟢 Người online: {online}

</h3>



<div className="room-list">


{

rooms.map(room=>(


<div

className="room-card"

key={room.id}

>


<h2>

{room.name}

</h2>


<p>

🎫 Vé: {room.fee}

</p>



<button

onClick={()=>nav("/room/"+room.id)}

>

Vào phòng

</button>


</div>


))


}



</div>


</div>


)


}

