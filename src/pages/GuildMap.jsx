import {useState} from "react";
import "./GuildMap.css";


export default function GuildMap(){


const areas=[


{

id:1,

name:"🌲 Rừng Cổ",

enemy:"Bang Hắc Long",

defense:3000

},


{

id:2,

name:"🏜️ Sa Mạc Lửa",

enemy:"Bang Ma Vương",

defense:6000

},


{

id:3,

name:"🏰 Thành Thiên Đế",

enemy:"Long Thần",

defense:10000

}


];





const [heroes]=useState(

JSON.parse(

localStorage.getItem("heroes")

)

||[]

);



const power=heroes.reduce(

(a,b)=>a+b.power,

0

);



const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond"))

||5000

);



const [owned,setOwned]=useState(

JSON.parse(

localStorage.getItem("ownedMap")

)

||[]

);



const [message,setMessage]=useState("");





function attack(area){



const fightPower=

power+

Math.floor(

Math.random()*3000

);



if(fightPower>=area.defense){



const list=[

...owned,

area.name

];



setOwned(list);



localStorage.setItem(

"ownedMap",

JSON.stringify(list)

);



setDiamond(diamond+500);



localStorage.setItem(

"diamond",

diamond+500

);



setMessage(

"🏆 Chiếm được "+area.name+" +500 Diamond"

);



}

else{


setMessage(

"💥 Thất bại! Cần mạnh hơn"

);


}



}





return(


<div className="guild-map-page">


<div className="guild-map-glass">



<h1>

🌍 BẢN ĐỒ BANG HỘI

</h1>




<p>

⚔️ Sức mạnh quân:

{power}

</p>



<p>

💎 Diamond:

{diamond}

</p>




<div className="map-list">



{

areas.map(a=>(


<div

className="area-card"

key={a.id}

>



<h2>

{a.name}

</h2>



<p>

🏰 Địch:

{a.enemy}

</p>



<p>

🛡️ Phòng thủ:

{a.defense}

</p>




<button

onClick={()=>attack(a)}

>

⚔️ Chiếm Thành

</button>



</div>


))


}


</div>




<div className="owned">


<h2>

🏰 Thành đã chiếm

</h2>


{

owned.map((x,i)=>(


<p key={i}>

✅ {x}

</p>


))


}

</div>





<div className="message">

{message}

</div>




</div>


</div>


)

}
