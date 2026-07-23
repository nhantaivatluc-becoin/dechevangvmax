import "./PetSystem.css";

import {useState} from "react";


export default function PetSystem({gold,setGold,setPetBonus}){


const [pet,setPet]=useState({

name:"🐶 Pet thường",

level:1,

power:1

});



const pets=[


{
name:"🐶 Pet thường",
price:0,
power:1
},


{
name:"🐱 Pet bạc",
price:5000,
power:1.5
},


{
name:"🐯 Pet vàng",
price:20000,
power:2
},


{
name:"🐉 Pet rồng",
price:100000,
power:3
}


];





function buy(item){


if(gold < item.price){

return;

}



setGold(
gold-item.price
);



setPet({

name:item.name,

level:1,

power:item.power

});


setPetBonus(item.power);



}





function upgrade(){


const cost=

pet.level*10000;



if(gold < cost){

return;

}



setGold(

gold-cost

);



setPet({

...pet,

level:pet.level+1,

power:pet.power+0.2

});


setPetBonus(

pet.power+0.2

);



}





return(


<div className="pet-box">


<h2>

🐾 PET ĐÀO VÀNG

</h2>



<h3>

{pet.name}

</h3>



<p>

⭐ Level:

{pet.level}

</p>


<p>

⚡ Bonus:

x{pet.power}

</p>



<button

onClick={upgrade}

>

⬆️ Nâng Pet

</button>





<h3>

Mua Pet

</h3>



{

pets.map((p,i)=>(


<div

className="pet-item"

key={i}

>


<span>

{p.name}

</span>



<button

onClick={()=>buy(p)}

>

💰 {p.price}

</button>


</div>


))


}




</div>


)


}
