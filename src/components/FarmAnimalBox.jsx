import {useState,useEffect} from "react";
import "./FarmAnimalBox.css";


export default function FarmAnimalBox(){


const [animals,setAnimals]=useState([


{
name:"Bò Vàng",
icon:"🐮",
level:1,
food:80,
gold:50
},


{
name:"Gà Kim Cương",
icon:"🐔",
level:1,
food:70,
gold:30
},


{
name:"Rồng Vàng",
icon:"🐉",
level:1,
food:100,
gold:100
}


]);



const feed=(index)=>{


let data=[...animals];


if(data[index].food<100){

data[index].food+=10;

}


setAnimals(data);


};



useEffect(()=>{


const timer=setInterval(()=>{


setAnimals(old=>

old.map(a=>({

...a,

gold:a.gold+1

}))

);


},60000);



return()=>clearInterval(timer);



},[]);



return(


<div className="farm-box">


<h2>

🏡 KHU NUÔI ĐỘNG VẬT

</h2>



<div className="animal-grid">


{

animals.map((a,index)=>(


<div className="animal-card" key={index}>


<div className="animal-icon">

{a.icon}

</div>


<h3>

{a.name}

</h3>


<p>

⭐ Cấp {a.level}

</p>



<div className="food-bar">


<div

style={{

width:a.food+"%"

}}

/>


</div>



<p>

🥕 Thức ăn {a.food}%

</p>



<p>

💰 +{a.gold}/phút

</p>



<button

onClick={()=>feed(index)}

>

🥕 Cho ăn

</button>


</div>


))


}


</div>


</div>


)

}
