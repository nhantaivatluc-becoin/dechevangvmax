import {useState} from "react";
import "./CharacterShop.css";


export default function CharacterShop(){


const characters=[


{
id:1,
name:"Kiếm Sĩ",
type:"Thường",
price:100,
power:300,
icon:"⚔️"
},


{
id:2,
name:"Pháp Sư",
type:"Hiếm",
price:500,
power:800,
icon:"🔮"
},


{
id:3,
name:"Chiến Thần",
type:"Huyền Thoại",
price:2000,
power:3000,
icon:"👑"
}


];



const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond"))

||5000

);



const [heroes,setHeroes]=useState(

JSON.parse(localStorage.getItem("heroes"))

||[]

);



const [message,setMessage]=useState("");





function buy(hero){



if(diamond < hero.price){


setMessage("❌ Không đủ Diamond");


return;


}




const newHero={


...hero,


level:1,


food:10,


power:hero.power


};



const list=[

...heroes,

newHero

];



setHeroes(list);


setDiamond(diamond-hero.price);



localStorage.setItem(

"heroes",

JSON.stringify(list)

);



localStorage.setItem(

"diamond",

diamond-hero.price

);



setMessage(

"🎉 Đã mở khóa "+hero.name+"!"

);



setTimeout(()=>{


setMessage("");


},3000);



}





return(


<div className="character-page">


<div className="character-glass">



<h1>

🧍 SHOP NHÂN VẬT

</h1>




<div className="shop-notice">

<div className="running-text">

🔥 Tướng huyền thoại xuất hiện ⭐ Săn tướng mạnh để chiến đấu Bang Hội ⚔️

</div>

</div>




<h2>

💎 Diamond: {diamond}

</h2>




{

message &&

<div className="buy-message">

{message}

</div>

}




<div className="character-list">



{

characters.map(c=>(


<div

className={

"character-card "+

c.type.replaceAll(" ","-")

}

key={c.id}

>



<div className="hero-open">

{c.icon}

</div>



<h2>

{c.name}

</h2>



<div className="rarity">

⭐ {c.type}

</div>



<p>

⚔️ Sức mạnh {c.power}

</p>



<p>

💎 {c.price}

</p>



<button

onClick={()=>buy(c)}

>

🔓 Mở khóa

</button>



</div>


))


}


</div>




</div>


</div>


)


}
