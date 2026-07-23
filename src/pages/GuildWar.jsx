import {useState} from "react";
import "./GuildWar.css";


const enemies=[


{
name:"🔥 Hắc Long Hội",
power:50000
},


{
name:"⚔️ Thiên Kiếm Bang",
power:120000
},


{
name:"🐉 Long Thần Điện",
power:300000
}


];



export default function GuildWar(){


const [enemy,setEnemy]=useState(

enemies[0]

);



const [result,setResult]=useState("");



const guild=

JSON.parse(

localStorage.getItem("guild")

)

||null;



const pets=

JSON.parse(

localStorage.getItem("pets")

)

||[];



const pet=

pets.find(

p=>p.active

);



function calculatePower(){



let guildPower=0;



if(guild){


guildPower=

(guild.power||0)

+

((guild.level||1)*5000);


}



let petPower=

pet

?

pet.power

:

0;



return guildPower+petPower;



}



function fight(){



let myPower=

calculatePower();



if(myPower>=enemy.power){



let g=

guild;



if(g){


g.exp=

(g.exp||0)+1000;


g.power=

(g.power||0)+5000;



localStorage.setItem(

"guild",

JSON.stringify(g)

);



}



let gold=

Number(

localStorage.getItem("gold")

)

||0;



gold+=5000;



localStorage.setItem(

"gold",

gold

);



setResult(

"🏆 CHIẾN THẮNG +5000 vàng +1000 EXP Bang"

);



}


else{


setResult(

"💀 THẤT BẠI - Cần nâng cấp Bang/Pet"

);


}



setTimeout(()=>{


let next=

enemies[

Math.floor(

Math.random()*enemies.length

)

];


setEnemy(next);



},1500);



}



return(


<div className="guild-war-page">


<h1>

⚔️ CHIẾN BANG

</h1>



<div className="war-card">


<h2>

🏰 Bang của bạn

</h2>



<p>

⚔️ Chiến lực:

{calculatePower()}

</p>



</div>



<div className="vs">

VS

</div>



<div className="enemy-war-card">


<h2>

{enemy.name}

</h2>



<p>

⚔️ Chiến lực:

{enemy.power}

</p>


</div>



<button

onClick={fight}

>

🔥 TẤN CÔNG

</button>



<h2>

{result}

</h2>



</div>


)

}
