import React from "react";

import {useNavigate} from "react-router-dom";


const categories=[


["🔥","Game Hot"],

["🕹","Game Cổ Điển"],

["🚀","Game Hiện Đại"],

["⚔","PVP"],

["🎯","Mini Game"]

];



const games=[


{
icon:"🐍",
name:"Snake",
type:"Classic"
},


{
icon:"🧱",
name:"Brick Breaker",
type:"Classic"
},


{
icon:"♟",
name:"Chess",
type:"Strategy"
},


{
icon:"🏎",
name:"Racing",
type:"Modern"
},


{
icon:"🔫",
name:"Shooting",
type:"Modern"
},


{
icon:"⚔",
name:"Pet Battle",
type:"PVP"
}


];



export default function Game(){


const navigate=useNavigate();



return(

<div className="game-page">



<h2>

🎮 GAME CENTER

</h2>




<div className="game-category">


{

categories.map((item,index)=>(


<button

key={index}

>


<div>

{item[0]}

</div>


<span>

{item[1]}

</span>


</button>


))


}


</div>





<h3>

🔥 Danh sách trò chơi

</h3>




<div className="game-grid">


{

games.map((game,index)=>(


<div

className="game-card"

key={index}

>


<div className="game-icon">

{game.icon}

</div>




<h3>

{game.name}

</h3>



<p>

{game.type}

</p>




<button

onClick={()=>navigate("/wallet")}

>

CHƠI

</button>



</div>


))


}


</div>






<div className="game-money-box">


💰 Khu chơi thưởng


<br/>


Chuẩn bị kết nối Wallet


</div>





</div>

)

}
