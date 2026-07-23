import {useState} from "react";
import "./PetEvolution.css";


export default function PetEvolution(){


const [pet,setPet]=useState(

JSON.parse(
localStorage.getItem("activePet")
)

||

{

name:"🔥 Hỏa Long",

level:10,

power:5000

}

);



const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond")) || 2265

);



function evolve(){


if(diamond < 500){

alert("Không đủ Diamond");

return;

}



const newPet={

...pet,

name:"🐲 Hắc Long Thức Tỉnh",

level:pet.level+10,

power:pet.power*2

};



setPet(newPet);


let d=diamond-500;


setDiamond(d);



localStorage.setItem(

"diamond",

d

);



localStorage.setItem(

"activePet",

JSON.stringify(newPet)

);


alert(
"🎉 Pet đã tiến hóa!"
);



}



return(

<div className="evolution">


<h1>
🔥 TIẾN HÓA PET
</h1>



<div className="evo-card">


<h2>
{pet.name}
</h2>


<p>
⭐ Level: {pet.level}
</p>


<p>
⚔️ Power: {pet.power}
</p>


<p>
💎 Diamond: {diamond}
</p>



<button onClick={evolve}>

🔥 TIẾN HÓA (500💎)

</button>


</div>


</div>

)

}
