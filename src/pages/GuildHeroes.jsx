import {useState} from "react";
import "./GuildHeroes.css";


export default function GuildHeroes(){


const [gold,setGold]=useState(50000);


const [heroes,setHeroes]=useState([

{
name:"Bang Chủ",
icon:"👑",
level:10,
power:5000,
skill:"Lãnh Đạo"
},

{
name:"Chiến Binh",
icon:"⚔️",
level:5,
power:3000,
skill:"Chém Mạnh"
},

{
name:"Pháp Sư",
icon:"🧙",
level:6,
power:4500,
skill:"Hỏa Cầu"
},

{
name:"Cung Thủ",
icon:"🏹",
level:4,
power:2800,
skill:"Bắn Xa"
},

{
name:"Long Kỵ Sĩ",
icon:"🐉",
level:8,
power:6000,
skill:"Long Hỏa"
}

]);



function upgrade(index){


if(gold < 5000){

return;

}


let data=[...heroes];


data[index].level += 1;

data[index].power += 1000;


setHeroes(data);


setGold(gold-5000);


}



return (

<div className="heroes-page">


<h1>
🔥 ANH HÙNG BANG HỘI
</h1>


<h3>
💰 Gold: {gold}
</h3>



<div className="heroes-list">


{

heroes.map((hero,index)=>(


<div className="hero-card" key={index}>


<div className="hero-icon">

{hero.icon}

</div>


<h2>
{hero.name}
</h2>


<p>
⭐ Level: {hero.level}
</p>


<p>
🔥 Power: {hero.power}
</p>


<p>
⚡ Skill: {hero.skill}
</p>



<button onClick={()=>upgrade(index)}>

⬆ Nâng cấp 5000 Gold

</button>



</div>


))


}


</div>


</div>

)

}
