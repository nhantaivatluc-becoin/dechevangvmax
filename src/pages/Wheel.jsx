import React, {useState} from "react";
import GameHeader from "../components/GameHeader";
import BottomMenu from "../components/BottomMenu";


export default function Wheel(){


const [gold,setGold]=useState(1000);

const [energy,setEnergy]=useState(100);

const [effects,setEffects]=useState([]);



const mineGold=()=>{


if(energy<=0) return;



const amount=Math.floor(Math.random()*5)+5;


setGold(prev=>prev+amount);


setEnergy(prev=>prev-1);



const id=Date.now();



setEffects(prev=>[

...prev,

{
id,
text:+ GOLD
}

]);



setTimeout(()=>{


setEffects(prev=>

prev.filter(

item=>item.id!==id

)

);


},1200);



};




return (

<div className="mine-page">


<GameHeader

gold={gold}

diamond={0}

vip={0}

/>



<div className="mine-container">



<h1>

⛏️ KHU MỎ VÀNG

</h1>



<div className="mine-area">


<div className="mine-icon">

⛰️

</div>



{

effects.map(item=>(

<div

key={item.id}

className="mine-effect"

>

{item.text}

</div>

))

}



<button

className="big-mine-button"

onClick={mineGold}

>

⛏️

ĐÀO VÀNG

</button>



</div>




<div className="energy-box">


⚡ Năng lượng


<b>

{energy}/100

</b>



</div>




<div className="mine-info">


<div>

🔥

<br/>

Tốc độ đào

<br/>

<b>

+5 GOLD/lần

</b>

</div>



<div>

⏱️

<br/>

Auto Mine

<br/>

<b>

+0.50/phút

</b>

</div>



</div>




</div>



<BottomMenu/>


</div>


);


}
