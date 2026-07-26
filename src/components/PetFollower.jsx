import React from "react";

import {playerMock} from "../mock/player";


export default function PetFollower(){


const pet=playerMock.pet;



return (

<div className="pet-follow">


<img

src={pet.image}

onError={(e)=>{

e.currentTarget.style.display="none"

}}

alt="pet"

/>


<div>

{pet.name}

</div>


<span>

{pet.bonus}

</span>


</div>

)


}
