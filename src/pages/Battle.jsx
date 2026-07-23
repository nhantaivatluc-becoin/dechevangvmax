import {useState} from "react";
import "./Battle.css";


export default function Battle(){


const pet={

name:"🦁 Sư Tử",

power:800

};



const [enemy,setEnemy]=useState({

name:"👹 Goblin",

hp:3000,

maxHp:3000

});



const [gold,setGold]=useState(

Number(localStorage.getItem("gold")) || 4783

);



function attack(){


const damage=

Math.floor(Math.random()*300)+pet.power;


let hp=enemy.hp-damage;



if(hp<=0){


let newGold=gold+500;


setGold(newGold);


localStorage.setItem(
"gold",
newGold
);


setEnemy({

...enemy,

hp:enemy.maxHp

});


return;

}



setEnemy({

...enemy,

hp

});


}




return(

<div className="battle">


<h1>
⚔️ CHIẾN ĐẤU
</h1>



<div className="enemy">


<h2>
{enemy.name}
</h2>


<h3>
❤️ {enemy.hp}/{enemy.maxHp}
</h3>


<div className="hpbar">

<div

style={{

width:(enemy.hp/enemy.maxHp*100)+"%"

}}

></div>


</div>


</div>




<div className="pet">


<h2>
🐾 PET CHIẾN ĐẤU
</h2>


<h3>
{pet.name}
</h3>


<p>
⚔️ Power {pet.power}
</p>


</div>



<button

onClick={attack}

>

⚔️ TẤN CÔNG

</button>



<h3>
💰 Vàng {gold}
</h3>



</div>

)

}
