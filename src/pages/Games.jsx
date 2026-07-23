import "./Games.css";

import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import SideMenu from "../components/SideMenu";
import AssetHUD from "../components/AssetHUD";


export default function Games(){


const games=[

"🃏 Tiến Lên",
"🀄 Cờ Tướng",
"🐴 Cờ Cá Ngựa",
"🎯 Bầu Cua",
"🎲 Xóc Đĩa",
"🪁 Ô Ăn Quan",

"🎣 Bắn Cá",
"⚔️ PvP Arena",
"🏰 Xây Thành",
"🚗 Đua Xe",
"🎰 Slot",
"♠️ Poker",
"🌎 MMORPG"

];



return(


<div className="games-page">


<SideMenu/>

<Header/>

<AssetHUD/>





<h1>

🎮 GAME CENTER

</h1>



<div className="games-list">


{

games.map((game,index)=>(


<div

className="game-box"

key={index}

>


<h2>

{game}

</h2>


<button>

Vào game

</button>


</div>


))


}



</div>



<BottomMenu/>


</div>


)


}
