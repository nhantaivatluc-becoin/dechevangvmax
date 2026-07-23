import "./PetEffect.css";


export default function PetEffect({pet}){


let effect="";



if(

pet.rarity==="god" ||

pet.name.includes("Rồng")

){

effect="dragon";

}



if(

pet.name.includes("Phượng")

){

effect="phoenix";

}



if(

pet.name.includes("Kỳ Lân")

){

effect="unicorn";

}



return(

<div className={"pet-effect "+effect}>


<div className="pet-icon">

{pet.name.substring(0,2)}

</div>



{

effect==="dragon" &&

<div className="fire">

🔥🔥🔥

</div>

}



{

effect==="phoenix" &&

<div className="wing">

🔥 🪽 🔥

</div>

}



{

effect==="unicorn" &&

<div className="rainbow">

✨🌈✨

</div>

}



</div>

)

}
