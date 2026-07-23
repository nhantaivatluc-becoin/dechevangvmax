import {useState} from "react";
import "./BattleArena.css";


export default function BattleArena(){


const [boss,setBoss]=useState({

name:"🐉 Long Thần",

hp:10000,

max:10000

});



const [heroes]=useState(

JSON.parse(

localStorage.getItem("heroes")

)

||[

{

name:"Kiếm Sĩ",

power:500

},

{

name:"Pháp Sư",

power:800

}

]

);



const [damage,setDamage]=useState(0);

const [effect,setEffect]=useState("");

const [reward,setReward]=useState(0);





function attack(){


const dmg=

heroes.reduce(

(a,b)=>a+b.power,

0

)

+

Math.floor(Math.random()*500);



const hp=Math.max(

0,

boss.hp-dmg

);



setBoss({

...boss,

hp

});



setDamage(dmg);



setEffect("⚔️ Đội quân tấn công!");




if(hp<=0){


setReward(reward+1000);


setEffect(

"🏆 Hạ Boss! Nhận 1000 Gold"

);


setBoss({

...boss,

hp:boss.max

});


}



}






return(


<div className="arena-page">


<div className="arena-glass">



<h1>

⚔️ CHIẾN TRƯỜNG BANG

</h1>




<div className="battle-field">



<div className="hero-team">


{

heroes.map((h,i)=>(


<div

className="fighter"

key={i}

>


🧙

<br/>

{h.name}

</div>


))


}

</div>





<div className="boss-fight">


<div className="boss-icon">

🐉

</div>


<h2>

{boss.name}

</h2>



<div className="hp-bar">


<div

style={{

width:

(boss.hp/boss.max*100)+"%"

}}

/>


</div>



<p>

❤️ {boss.hp}/{boss.max}

</p>


</div>



</div>





<button

onClick={attack}

>

⚔️ Tấn Công

</button>




<div className="damage">


{effect}


<br/>

💥 Sát thương:

{damage}


<br/>

🎁 Thưởng:

{reward}


</div>



</div>


</div>


)

}
