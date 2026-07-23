import {useState} from "react";
import "./PetUpgrade.css";


export default function PetUpgrade(){


const [pet,setPet]=useState({

name:"🔥 Hỏa Long",

level:10,

power:5000

});


const [gold,setGold]=useState(

Number(localStorage.getItem("gold")) || 4783

);



function upgrade(){


if(gold < 500){

alert("Không đủ vàng");

return;

}


let newPet={

...pet,

level:pet.level+1,

power:pet.power+1000

};


setPet(newPet);


let newGold=gold-500;


setGold(newGold);


localStorage.setItem(
"gold",
newGold
);


localStorage.setItem(
"activePet",
JSON.stringify(newPet)
);


}



return(

<div className="pet-upgrade">


<h1>
⬆️ TIẾN HÓA PET
</h1>



<div className="upgrade-card">


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
💰 Vàng: {gold}
</p>



<button onClick={upgrade}>

⬆️ Nâng cấp (500 vàng)

</button>



</div>


</div>

)

}
