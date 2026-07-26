import React,{useState} from "react";
import "./BattleArena.css";


export default function BattleArena(){

const [fight,setFight]=useState(false);
const [hp,setHp]=useState(100);


const startFight=()=>{

setFight(true);

setTimeout(()=>{

setHp(prev=>prev-10);

},2000);

};



return (

<div className="arena-page">


<header className="arena-header">

<h1>
⚔ BATTLE ARENA
</h1>

</header>



<section className="arena-card">


<div className="hero">

🧙‍♂️

<h2>
Hero Lv1
</h2>


<div className="hp">

❤️ HP {hp}/100

</div>


<div>

⚡ Energy 100

</div>


</div>



<div className="vs">

VS

</div>



<div className="enemy">

🐉

<h2>
Dragon Boss
</h2>


<div>
❤️ HP 1000
</div>


<div>
🔥 Boss Level 1
</div>


</div>


</section>




<button
className="fight-btn"
onClick={startFight}
>

{
fight
?
"⚔ ĐANG CHIẾN ĐẤU"
:
"🎯 TÌM TRẬN"
}

</button>



<section className="reward">


<h2>
🎁 Phần thưởng
</h2>


<div>

🪙 +100 Gold

</div>


<div>

💎 +1 Diamond

</div>


<div>

⭐ +50 EXP

</div>


</section>



</div>

)

}
