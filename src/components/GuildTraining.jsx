import {useState} from "react";
import "./GuildTraining.css";


export default function GuildTraining(){


const [gold,setGold]=useState(50000);



const [heroes,setHeroes]=useState([


{
name:"Chiến Binh",
icon:"⚔️",
level:5,
power:3000,
hp:7000
},


{
name:"Pháp Sư",
icon:"🧙",
level:6,
power:4500,
hp:5000
},


{
name:"Long Kỵ Sĩ",
icon:"🐉",
level:8,
power:6000,
hp:12000
}


]);



function train(index){


if(gold<5000){

return;

}



let data=[...heroes];


data[index].level++;

data[index].power+=1000;

data[index].hp+=2000;


setHeroes(data);


setGold(gold-5000);


}



return(


<div className="training-page">


<h1>

🔥 NUÔI NHÂN VẬT CHIẾN ĐẤU

</h1>


<h3>

💰 Gold: {gold}

</h3>



<div className="training-list">


{

heroes.map((hero,index)=>(


<div className="training-card" key={index}>


<div className="training-icon">

{hero.icon}

</div>



<h2>

{hero.name}

</h2>



<p>

⭐ Level:

{hero.level}

</p>



<p>

🔥 Power:

{hero.power}

</p>



<p>

❤️ HP:

{hero.hp}

</p>



<button

onClick={()=>train(index)}

>

⚔️ Nuôi +5000 Gold

</button>



</div>


))


}


</div>


</div>


)


}
