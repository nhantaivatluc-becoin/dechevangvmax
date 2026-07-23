import React, {useState} from "react";
import "./Wheel.css";


export default function Wheel(){


const [spinning,setSpinning]=useState(false);
const [result,setResult]=useState("");



const prizes=[

"💰 +100 Gold",
"💎 +1 Diamond",
"🎁 VIP",
"💰 +500 Gold",
"⚡ Energy"

];



function spin(){


if(spinning)return;


setSpinning(true);
setResult("");


setTimeout(()=>{


const win =
prizes[
Math.floor(
Math.random()*prizes.length
)
];


setResult(win);

setSpinning(false);


},2000);


}



return (

<div className="wheel-page">


<h1>
🎡 VÒNG QUAY MAY MẮN
</h1>



<div className="wheel">


🎡

</div>



<button

className="spin-button"

onClick={spin}

disabled={spinning}

>


{

spinning

?

"🎡 ĐANG QUAY..."

:

"QUAY NGAY"

}


</button>



{

result &&

<div className="result-box">

{result}

</div>

}



</div>


);


}
