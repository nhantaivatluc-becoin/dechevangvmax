import {useState} from "react";
import "./CharacterCity.css";


export default function CharacterCity(){


const [diamond,setDiamond]=useState(5000);

const [gold,setGold]=useState(50000);



const [heroes,setHeroes]=useState([


{
name:"Chiến Binh",
icon:"⚔️",
level:5,
x:20
},


{
name:"Pháp Sư",
icon:"🧙",
level:3,
x:55
},


{
name:"Long Kỵ Sĩ",
icon:"🐉",
level:7,
x:80
}


]);



const buyHero=()=>{


if(diamond>=1000){


setDiamond(diamond-1000);



setHeroes([

...heroes,

{

name:"Cung Thủ",

icon:"🏹",

level:1,

x:40

}

]);


}


};



const train=(index)=>{


if(gold>=5000){


let data=[...heroes];


data[index].level++;


setHeroes(data);


setGold(gold-5000);


}


};



return(


<div className="city-page">


<h1>

🏰 THÀNH NHÂN VẬT

</h1>



<div className="resource">

💎 {diamond}

<br/>

💰 {gold}

</div>




<div className="castle">


🏰


<div className="tower">

🏯

</div>


</div>





<div className="training-area">


🔥 KHU HUẤN LUYỆN


</div>





<button

onClick={buyHero}

>

🛒 Mua nhân vật 1000 💎

</button>





<div className="character-field">


{

heroes.map((hero,index)=>(


<div

className="walking-character"

style={{

left:hero.x+"%"

}}

key={index}

>


<div>

{hero.icon}

</div>


<p>

{hero.name}

</p>


<span>

Lv {hero.level}

</span>



<button

onClick={()=>train(index)}

>

⬆

</button>



</div>


))


}


</div>




</div>


)


}
