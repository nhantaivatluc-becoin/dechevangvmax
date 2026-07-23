import "./SideMenu.css";

import {
useState
} from "react";


import {
useNavigate
} from "react-router-dom";



export default function SideMenu(){


const [open,setOpen]=useState(false);


const navigate=useNavigate();




function go(path){


navigate(path);


setOpen(false);


}





return(


<>


<button

className="menu-btn"

onClick={()=>setOpen(true)}

>

☰

</button>




{

open &&

<div

className="overlay"

onClick={()=>setOpen(false)}

></div>


}





<div

className={

open

?

"side-menu open"

:

"side-menu"

}

>




<div className="brand">


👑


<h2>

ĐẾ CHẾ VÀNG

</h2>


</div>






<button onClick={()=>go("/home")}>

🏠 Home

</button>



<button onClick={()=>go("/mining")}>

⛏️ Đào vàng

</button>



<button onClick={()=>go("/pet")}>

🐾 Pet

</button>



<button onClick={()=>go("/vip")}>

⭐ VIP

</button>



<button onClick={()=>go("/wallet")}>

💎 Ví tiền

</button>






<h3>

🎲 GAME DÂN GIAN

</h3>



<div className="game">

🃏 Tiến Lên

</div>


<div className="game">

🀄 Cờ Tướng

</div>



<div className="game">

🐴 Cờ Cá Ngựa

</div>



<div className="game">

🎯 Bầu Cua

</div>



<div className="game">

🎲 Xóc Đĩa

</div>



<div className="game">

🪁 Ô Ăn Quan

</div>






<h3>

🎮 GAME HIỆN ĐẠI

</h3>



<div className="game">

🎣 Bắn Cá

</div>


<div className="game">

⚔️ PvP Arena

</div>



<div className="game">

🏰 Xây Thành

</div>



<div className="game">

🚗 Đua Xe

</div>



<div className="game">

🎰 Slot

</div>



<div className="game">

♠️ Poker

</div>



<div className="game">

🌎 MMORPG

</div>







<hr/>


<button>

⚙️ Cài đặt

</button>



</div>



</>


)


}
