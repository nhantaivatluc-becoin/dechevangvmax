import "./Wheel.css";`nimport AssetBar from "../components/AssetBar";
import { useState } from "react";


export default function Wheel(){

const prizes=[
{icon:"🪙",value:"1000",name:"GOLD"},
{icon:"💎",value:"0.01",name:"DIAMOND"},
{icon:"🪙",value:"5000",name:"GOLD"},
{icon:"👑",value:"VIP",name:"1 NGÀY"},
{icon:"💎",value:"0.05",name:"DIAMOND"},
{icon:"🪙",value:"10000",name:"GOLD"},
{icon:"🎁",value:"0.1",name:"DIAMOND"},
{icon:"🪙",value:"50000",name:"GOLD"}
];


const tickSound=new Audio("/sound/tick.mp3");
const winSound=new Audio("/sound/win.mp3");


const [rotate,setRotate]=useState(0);
const [spinning,setSpinning]=useState(false);
const [result,setResult]=useState("");


function spin(){

if(spinning)return;


setSpinning(true);
setResult("");


let tick=setInterval(()=>{

tickSound.currentTime=0;

tickSound.play().catch(()=>{});

},180);



const index=Math.floor(Math.random()*prizes.length);



setRotate(
rotate + 3600 + (360-index*45)
);



setTimeout(()=>{


clearInterval(tick);


winSound.play().catch(()=>{});


setResult(

`${prizes[index].icon} ${prizes[index].value} ${prizes[index].name}`

);


setSpinning(false);


},6000);


}



return (

<div className="wheel-page">


<div className="diamond-card">

💎 DIAMOND

<strong>

0.001

</strong>

</div>


<div className="notice-top">

🍀 CHÚC BẠN MAY MẮN 🍀

</div>



<div className="wheel-area">


<div className="pointer">

▼

</div>



<div

className="wheel"

style={{

transform:`rotate(${rotate}deg)`

}}

>


<svg

className="wheel-svg"

viewBox="0 0 430 430"

>


{

prizes.map((p,i)=>(


<g

key={i}

transform={`rotate(${i*45+22.5} 215 215)`}

>


<text

x="215"

y="70"

textAnchor="middle"

className="wheel-prize-text" transform="translate(0,-20)"

>


<tspan x="215">

{p.icon}

</tspan>


<tspan x="215" dy="25">

{p.value}

</tspan>


<tspan x="215" dy="18">

{p.name}

</tspan>


</text>


</g>


))

}


</svg>



<div className="wheel-center">

⭐

</div>



</div>


</div>




<button onClick={spin}>

{

spinning

?

"🎡 ĐANG QUAY..."

:

"💎 QUAY NGAY 0.01"

}


</button>



{

result &&

<div className="result">

🎉 CHÚC MỪNG

<br/>

{result}

</div>

}



</div>

);


}



