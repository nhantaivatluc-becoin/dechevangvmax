import {useState} from "react";
import "./GuildBoss.css";


const MAX_HP = 1000000;


export default function GuildBoss(){


const [hp,setHp]=useState(

Number(

localStorage.getItem("guildBossHP")

)||MAX_HP

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



let playerDamage=1000;



let petDamage=0;



if(pet){


petDamage=Math.floor(

(pet.power||0)*0.8

);


}



let totalDamage=

playerDamage+petDamage;



let newHP=Math.max(

hp-totalDamage,

0

);



setHp(newHP);



localStorage.setItem(

"guildBossHP",

newHP

);



setLog(

"⚔️ Damage: "+

totalDamage+

" | 🐾 "+

(pet?pet.name:"Không có Pet")

);




if(newHP===0){



let gold=

Number(

localStorage.getItem("gold")

)||0;



gold+=20000;



localStorage.setItem(

"gold",

gold

);




let diamond=

Number(

localStorage.getItem("diamond")

)||0;



diamond+=20;



localStorage.setItem(

"diamond",

diamond

);




let guild=

JSON.parse(

localStorage.getItem("guild")

)

||null;



if(guild){



guild.exp=

(guild.exp||0)+500;



localStorage.setItem(

"guild",

JSON.stringify(guild)

);



}



setReward(

"🎉 Hạ Boss +20000 vàng +20 kim cương"

);



setTimeout(()=>{


setHp(MAX_HP);



localStorage.setItem(

"guildBossHP",

MAX_HP

);



setReward("");



},3000);



}



}



return(


<div className="guild-boss-page">


<h1>

🔥 BOSS BANG HỘI

</h1>



<div className="guild-boss">


<h2>

🐉 CỔ LONG BANG HỘI

</h2>



<div className="boss-bar">


<div

className="boss-progress"

style={{

width:

(hp/MAX_HP*100)+"%"

}}


/>


</div>



<h3>

❤️ {hp}/{MAX_HP}

</h3>



</div>



<div className="fighter-box">


<h2>

⚔️ Người chơi

</h2>


<p>

Damage: 1000

</p>



<h2>

🐾 Pet chiến đấu

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

⚔️ ĐÁNH BOSS

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
