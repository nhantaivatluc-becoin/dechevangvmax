import React,{useEffect,useState} from "react";
import "./Shop.css";


const animals=[

{
icon:"🐶",
name:"Chó Shiba",
price:500,
power:10,
bonus:2
},

{
icon:"🐱",
name:"Mèo Anh",
price:800,
power:15,
bonus:3
},

{
icon:"🐺",
name:"Sói",
price:4000,
power:60,
bonus:8
},

{
icon:"🦊",
name:"Cáo",
price:3000,
power:45,
bonus:6
},

{
icon:"🐯",
name:"Hổ",
price:6000,
power:100,
bonus:15
},

{
icon:"🦁",
name:"Sư tử",
price:10000,
power:180,
bonus:25
},

{
icon:"🐘",
name:"Voi",
price:15000,
power:250,
bonus:30
},

{
icon:"🦅",
name:"Đại bàng",
price:12000,
power:220,
bonus:35
},

{
icon:"🐼",
name:"Gấu trúc",
price:9000,
power:120,
bonus:18
},

{
icon:"🐋",
name:"Cá voi",
price:30000,
power:500,
bonus:50
}

];




export default function Shop(){


const [user,setUser]=useState({});




function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);


setUser(data);


}




useEffect(()=>{


load();


},[]);








function buyPet(animal){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);




let gold=

Number(data.gold||0);





if(gold < animal.price){


alert("❌ Không đủ GOLD");


return;


}





data.gold=

gold-animal.price;





data.pets=

data.pets||[];





data.pets.push({

name:animal.name,

icon:animal.icon,

level:1,

power:animal.power,

bonus:animal.bonus

});






localStorage.setItem(

"user",

JSON.stringify(data)

);



load();



}





function buyEnergy(){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);





if(Number(data.gold||0)<100){


alert("Không đủ GOLD");


return;


}






data.gold-=100;



data.energy=

Number(data.energy||0)+100;




localStorage.setItem(

"user",

JSON.stringify(data)

);



load();



alert(

"⚡ +100 ENERGY"

);



}









return(



<div className="shop-page">





<h1>

🛒 SHOP THÚ CƯNG

</h1>







<div className="resource-box">


🪙 GOLD:

<b>

{Number(user.gold||0).toLocaleString()}

</b>


<br/>


⚡ ENERGY:

<b>

{user.energy||0}

</b>


</div>








<button

className="energy-btn"

onClick={buyEnergy}

>

⚡ MUA 100 ENERGY

<br/>

100 GOLD

</button>







<div className="animal-grid">



{

animals.map((a,i)=>(



<div

className="animal-card"

key={i}

>




<div className="pet-animation">


{a.icon}

</div>






<h3>

{a.name}

</h3>




<p>

⚔️ Power:

{a.power}

</p>


<p>

⛏️ Đào:

+{a.bonus}%

</p>




<p>

🪙

{a.price}

GOLD

</p>





<button

onClick={()=>buyPet(a)}

>

MUA

</button>



</div>



))

}



</div>







<h2>

🐾 THÚ CỦA BẠN

</h2>





<div className="my-pets">


{

user.pets?.map((p,i)=>(


<div

className="owned-pet"

key={i}

>


{p.icon}

<b>

{p.name}

</b>


<br/>

Level:

{p.level}


<br/>

Power:

{p.power}



</div>


))


}



</div>




</div>



)


}
