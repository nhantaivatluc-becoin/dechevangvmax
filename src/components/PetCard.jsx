import "./PetCard.css";


export default function PetCard({pet,feed,upgrade}){


return(

<div className="pet-card">


<div className="pet-title">

{pet.icon} {pet.name}

</div>


<div>

⭐ Level: {pet.level}

</div>


<div>

🔥 EXP: {pet.exp}/100

</div>


<div>

⛏️ Sức đào: +{pet.power}/phút

</div>



{

pet.evolve &&

<div className="evolve">

✨ Đã tiến hóa

</div>

}



<button onClick={feed}>

🍖 Cho ăn

</button>


<button onClick={upgrade}>

⬆️ Nâng cấp

</button>



</div>

)

}
