import {useState} from "react";
import "./GuildBuilding.css";


export default function GuildBuilding(){


const [buildings,setBuildings]=useState(

JSON.parse(

localStorage.getItem("guildBuildings")

)

||

{

castle:1,

tower:1,

goldMine:1,

diamondMine:1

}

);



const [gold,setGold]=useState(

Number(localStorage.getItem("guildGold"))

||5000

);



const list=[


{

id:"castle",

name:"🏰 Thành Chính",

level:buildings.castle,

cost:1000

},


{

id:"tower",

name:"🛡️ Tháp Phòng Thủ",

level:buildings.tower,

cost:800

},


{

id:"goldMine",

name:"⛏️ Mỏ Vàng",

level:buildings.goldMine,

cost:1200

},


{

id:"diamondMine",

name:"💎 Mỏ Kim Cương",

level:buildings.diamondMine,

cost:2000

}


];





function upgrade(id,cost){


if(gold<cost){


alert("Không đủ Gold Bang");


return;


}



const data={

...buildings

};



data[id]++;



setBuildings(data);


setGold(gold-cost);



localStorage.setItem(

"guildBuildings",

JSON.stringify(data)

);



localStorage.setItem(

"guildGold",

gold-cost

);


}





return(


<div className="building-page">


<div className="building-glass">



<h1>

🏰 CÔNG TRÌNH THÀNH BANG

</h1>



<p>

💰 Kho Gold:

{gold}

</p>





{

list.map(b=>(


<div

className="building-card"

key={b.id}

>


<h2>

{b.name}

</h2>


<p>

⭐ Cấp:

{b.level}

</p>



<button

onClick={()=>upgrade(b.id,b.cost)}

>

🏗️ Nâng cấp

{b.cost} Gold

</button>


</div>


))


}




<div className="bonus">


🔥 Cấp công trình càng cao

<br/>

⚔️ Bang càng mạnh

<br/>

💎 Mở khóa tài nguyên mới


</div>




</div>


</div>


)

}
