import {useState} from "react";
import "./WorldBoss.css";


export default function WorldBoss(){


const bossMax=500000;


const [hp,setHp]=useState(

Number(localStorage.getItem("bossHP"))

||bossMax

);



const [log,setLog]=useState("");



const [reward,setReward]=useState("");



const pets=

JSON.parse(

localStorage.getItem("pets")

)||[];



const pet=

pets.find(

p=>p.active

);



function attack(){



let playerDamage=500;


let petDamage=0;



if(pet){


petDamage=Math.floor(

pet.power*0.7

);


}



let total=

playerDamage+petDamage;



let newHp=Math.max(

hp-total,

0

);



setHp(newHp);



localStorage.setItem(

"bossHP",

newHp

);



setLog(

"⚔️ Damage: "+total+

" | 🐾 Pet: "+

(pet?pet.name:"Không có")

);



if(newHp===0){


let gold=

Number(localStorage.getItem("gold"))

||0;



gold+=10000;



localStorage.setItem(

"gold",

gold

);



let diamond=

Number(localStorage.getItem("diamond"))

||0;



diamond+=10;



localStorage.setItem(

"diamond",

diamond

);



setReward(

"🎉 Hạ Boss +10000 vàng +10 kim cương"

);



setTimeout(()=>{


setHp(bossMax);


localStorage.setItem(

"bossHP",

bossMax

);



},3000);



}



}



return(


<div className="boss-page">


<h1>

🌎 BOSS THẾ GIỚI

</h1>



<div className="boss-card">


<h2>

🐉 CỔ LONG HẮC ÁM

</h2>



<div className="boss-bar">


<div

className="boss-hp"

style={{

width:

(hp/bossMax*100)+"%"

}}

/>


</div>



<h3>

❤️ {hp}/{bossMax}

</h3>



</div>



<div className="fighter">


<h2>

⚔️ Chiến binh

</h2>


<p>

Damage:

500

</p>



<h2>

🐾 Pet hỗ trợ

</h2>


<p>

{

pet

?

pet.name

:

"Chưa chọn"

}

</p>


</div>



<button

onClick={attack}

>

⚔️ TẤN CÔNG BOSS

</button>



<h3>

{log}

</h3>



<h2>

{reward}

</h2>



</div>


)

}
