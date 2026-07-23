import React,{useEffect,useState} from "react";
import "./Home.css";
import {getPlayer} from "../services/player";


export default function Home(){

const [player,setPlayer]=useState(getPlayer());

const [mining,setMining]=useState(false);


useEffect(()=>{

if(!mining)return;


const timer=setInterval(()=>{

let data=getPlayer();

if(data){

data.gold=Number(data.gold||1000)+0.5;

localStorage.setItem(
"dechevang_player",
JSON.stringify(data)
);

setPlayer({...data});

}

},60000);


return()=>clearInterval(timer);


},[mining]);



return(

<div className="home-mobile">


<div className="king-card">


<div className="robot">
🤖
</div>


<h1>
ĐẾ CHẾ VÀNG
</h1>


<div className="player-name">

👤 {player?.username || "Miner"}

</div>


<div className="stats">


<div>
💰
<b>{player?.gold||1000}</b>
Gold
</div>


<div>
💎
<b>{player?.diamond||0}</b>
Diamond
</div>


<div>
👑
<b>VIP {player?.vip||0}</b>
</div>


</div>



<button

className={mining?"mine active":"mine"}

onClick={()=>setMining(!mining)}

>

{mining?"🤖 ĐANG ĐÀO":"⛏ BẮT ĐẦU ĐÀO"}

</button>



<div className="rate">

+0.50 Gold / phút

</div>


</div>


</div>

)

}
