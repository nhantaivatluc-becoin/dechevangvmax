import React,{useState,useEffect} from "react";
import "./GoldRobot.css";


export default function GoldRobot(){


const [gold,setGold]=useState(0);

const [auto,setAuto]=useState(true);

const [mining,setMining]=useState(false);



useEffect(()=>{


if(!auto) return;


const timer=setInterval(()=>{


setGold(g=>g+0.5);


},60000);



return()=>clearInterval(timer);



},[auto]);




const mine=()=>{


setMining(true);


setGold(g=>g+1);



setTimeout(()=>{

setMining(false);

},500);



};




return(


<div className="gold-robot-box">


<div className={

mining
?"robot mining"
:"robot"

}>


🤖


</div>



<h2>

ROBOT ĐÀO VÀNG

</h2>



<div className="gold-info">


🪙 +{gold.toFixed(2)} Gold


</div>





<div className="robot-buttons">


<button

onClick={()=>setAuto(!auto)}

>


{auto?"⚙️ TỰ ĐỘNG":"⛔ TẮT AUTO"}


</button>




<button

onClick={mine}

>

⛏️ ĐÀO VÀNG

</button>



</div>



<p>

Trạng thái:

<strong>

{auto?" Robot đang tự đào":" Chờ đào thủ công"}

</strong>

</p>



</div>


)


}

