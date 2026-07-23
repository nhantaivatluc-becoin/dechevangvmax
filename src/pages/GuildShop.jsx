import {useState} from "react";
import "./GuildShop.css";


export default function GuildShop(){


const [point,setPoint]=useState(

Number(localStorage.getItem("guildPoint")) || 0

);



function buy(){

if(point<500){

alert("❌ Chưa đủ cống hiến");

return;

}


setPoint(point-500);


localStorage.setItem(

"guildPoint",

point-500

);


alert(

"🎁 Nhận vật phẩm Bang"

);


}




return(

<div className="guild-page">


<div className="guild-box">


<h1>

🛒 SHOP BANG

</h1>


<p>

🔥 Cống hiến:

{point}

</p>



<div className="item">

⚔️ Kiếm Bang Hội

<br/>

Giá: 500 điểm

</div>



<button onClick={buy}>

Mua

</button>



</div>

</div>

)

}
