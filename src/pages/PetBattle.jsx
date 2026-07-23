import "./PetBattle.css";


export default function PetBattle(){


const pet=

JSON.parse(

localStorage.getItem("activePet")

)

||

{

name:"🦁 Sư Tử",

power:800

};



return(

<div className="pet-battle">


<h1>
🐾 PET CHIẾN ĐẤU
</h1>


<div className="battle-card">


<h2>
{pet.name}
</h2>


<p>
⚔️ Power {pet.power}
</p>


<button>

⚔️ Ra trận

</button>


</div>


</div>

)

}
