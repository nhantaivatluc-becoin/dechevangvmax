import {useState} from "react";
import "./GuildLand.css";

export default function GuildLand(){

const [guild,setGuild]=useState(
JSON.parse(localStorage.getItem("guild")) ||
{
name:"🐉 Long Thần",
level:1,
exp:0,
gold:0,
mine:1,
storage:1
}
);


function upgrade(){

let g={...guild};

if(g.gold<5000){

alert("Cần 5000 vàng Bang");

return;

}

g.gold-=5000;
g.level++;

if(g.level>20)
g.level=20;

g.mine++;
g.storage++;

setGuild(g);

localStorage.setItem(
"guild",
JSON.stringify(g)
);

}



function mineGold(){

let g={...guild};

g.gold += g.mine*100;

setGuild(g);

localStorage.setItem(
"guild",
JSON.stringify(g)
);

}



return(

<div className="guild-land">

<h1>
🏰 LÃNH ĐỊA BANG
</h1>


<div className="castle">

<h2>
{guild.name}
</h2>


<p>
🏯 Thành cấp: {guild.level}/20
</p>


<p>
💰 Kho Bang: {guild.gold}
</p>


<p>
⛏️ Mỏ vàng cấp: {guild.mine}
</p>


<p>
📦 Kho chứa cấp: {guild.storage}
</p>



<button onClick={mineGold}>
⛏️ Khai thác mỏ Bang
</button>


<button onClick={upgrade}>
⬆️ Nâng cấp Thành Bang
</button>


</div>

</div>

)

}
