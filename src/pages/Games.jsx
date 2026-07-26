import React from "react";
import "./Games.css";


export default function Games(){

const games=[

["🐔","Đá gà mini"],
["🏇","Đua ngựa"],
["♟️","Cờ vua"],
["🎯","Mini Game"],
["🎲","May mắn"]

];


return(

<div className="games-page">


<h1>
🎮 TRÒ CHƠI
</h1>


<p>
Khu vui chơi giải trí
</p>



{

games.map((g,i)=>(

<div className="game-card" key={i}>

<div className="game-icon">
{g[0]}
</div>

<span>
{g[1]}
</span>


<button>
CHƠI
</button>


</div>

))


}


</div>

)

}
