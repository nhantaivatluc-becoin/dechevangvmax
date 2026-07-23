import {useState} from "react";


export default function LuckyWheel(){


const [reward,setReward]=useState("");


function spin(){


const gifts=[

"🪙 +1.000 vàng",

"🪙 +10.000 vàng",

"💎 +0.1 kim cương",

"💎 +1 kim cương",

"👑 VIP 1 ngày"

];


const result=gifts[Math.floor(Math.random()*gifts.length)];


setReward(result);


}


return (

<div className="card">


<h2>
🎡 Vòng quay may mắn
</h2>


<div className="wheel">

🎡

</div>


<button onClick={spin}>

QUAY NGAY

</button>


<h3>
{reward}
</h3>


</div>

)


}
