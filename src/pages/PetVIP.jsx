import {useState} from "react";
import "./PetVIP.css";


export default function PetVIP(){


const [pets,setPets]=useState(

JSON.parse(localStorage.getItem("pets")) || []

);



const vipPets=[

{
name:"👑 Kim Long Thần",
power:500,
price:100000,
skill:"💰 Tăng 50% vàng đào"
},


{
name:"🌌 Hắc Phượng",
power:700,
price:200000,
skill:"⚡ Tăng tốc đào"
},


{
name:"🐲 Cổ Long",
power:1000,
price:500000,
skill:"🔥 Bạo kích vàng"
}

];



function buy(p){


let gold=

Number(localStorage.getItem("gold"))||0;



if(gold<p.price){

alert("❌ Không đủ vàng");

return;

}



gold-=p.price;



let list=[

...pets,

{

name:p.name,

icon:p.name.substring(0,2),

level:1,

exp:0,

power:p.power,

vip:true,

skill:p.skill,

evolve:false

}

];



localStorage.setItem(

"gold",

gold

);



localStorage.setItem(

"pets",

JSON.stringify(list)

);



setPets(list);



alert(

"🎉 Sở hữu Pet VIP "+p.name

);


}



function evolve(index){


let list=[...pets];


let pet=list[index];



if(!pet.vip){

return;

}



pet.evolve=true;

pet.level+=5;

pet.power*=2;



localStorage.setItem(

"pets",

JSON.stringify(list)

);



setPets(list);



alert(

"✨ Tiến hóa thành công"

);


}





return(

<div className="vip-pet-page">


<h1>

👑 PET VIP

</h1>



{

vipPets.map((p,i)=>(


<div className="vip-card" key={i}>


<h2>

{p.name}

</h2>


<p>

⛏️ +{p.power} vàng

</p>


<p>

💰 {p.price}

</p>


<p>

{p.skill}

</p>



<button

onClick={()=>buy(p)}

>

Mua

</button>


</div>


))


}



<h2>

✨ Tiến hóa Pet

</h2>



{

pets.filter(p=>p.vip).map((p,i)=>(


<button

key={i}

onClick={()=>evolve(i)}

>

✨ Tiến hóa {p.name}

</button>


))


}



</div>

)

}
