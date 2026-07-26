import React, { useEffect, useState } from "react";
import "./Mining.css";

export default function Mining(){

const [gold,setGold] = useState(2501);
const [diamond,setDiamond] = useState(0);
const [running,setRunning] = useState(false);

useEffect(()=>{

let timer;

if(running){
 timer=setInterval(()=>{
   setGold(v=>v+0.5);
 },60000);
}

return ()=>clearInterval(timer);

},[running]);


return (

<div className="mining-box">

<h1>⛏️ KHAI THÁC VÀNG</h1>

<p>Telegram:8454844333</p>

<p>Tốc độ cơ bản:</p>

<h2>+0.5 GOLD / PHÚT</h2>


<div className="asset">

💰 Vàng:
<b>{gold.toFixed(0)}</b>

<br/>

💎 Kim cương:
<b>{diamond.toFixed(0)}</b>

</div>


<button
onClick={()=>setRunning(!running)}
>
⛏ NHẬN VÀNG
</button>


</div>

);

}
