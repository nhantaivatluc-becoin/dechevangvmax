import {useState} from "react";
import "./PVP.css";


const enemies=[


{
name:"⚔️ Kỵ Sĩ Bóng Đêm",
power:5000
},


{
name:"🔥 Pháp Sư Lửa",
power:15000
},


{
name:"🐉 Long Vương",
power:50000
}


];



export default function PVP(){


const [enemy,setEnemy]=useState(

enemies[0]

);



const [result,setResult]=useState("");



const [score,setScore]=useState(

Number(localStorage.getItem("pvpScore"))

||0

);



const pets=

JSON.parse(

localStorage.getItem("pets")

)||[];



const pet=

pets.find(

p=>p.active

);



function fight(){



let myPower=0;



if(pet){

myPower=pet.power;

}



if(myPower>=enemy.power){


let newScore=score+100;


setScore(newScore);



localStorage.setItem(

"pvpScore",

newScore

);



let gold=

Number(localStorage.getItem("gold"))

||0;



gold+=1000;



localStorage.setItem(

"gold",

gold

);



setResult(

"🎉 THẮNG +100 PVP +1000 vàng"

);



}


else{


setResult(

"💀 THUA - Cần nâng cấp Pet"

);


}



let next=

enemies[

Math.floor(

Math.random()*enemies.length

)

];


setTimeout(()=>{

setEnemy(next);

},1500);



}



return(


<div className="pvp-page">


<h1>

⚔️ PVP ARENA

</h1>



<div className="player-card">


<h2>

🐾 Pet của bạn

</h2>


<h3>

{

pet

?

pet.name

:

"Chưa chọn"

}

</h3>



<p>

⚔️ Power:

{

pet

?

pet.power

:

0

}

</p>



</div>



<div className="vs">

VS

</div>



<div className="enemy-card">


<h2>

{enemy.name}

</h2>


<p>

⚔️ Power:

{enemy.power}

</p>


</div>



<button

onClick={fight}

>

🔥 THAM CHIẾN

</button>



<h2>

{result}

</h2>



<h3>

🏆 PVP Score:

{score}

</h3>



</div>


)

}
