import React from "react";

import {useNavigate} from "react-router-dom";

import "./Profile.css";


export default function Profile(){


const nav=useNavigate();



const player={


name:"NGUYEN NGOC ANH",

level:99,

vip:20,

gold:4783,

diamond:2265,

power:25130,

battle:120,

win:95,

lose:25


};





return(


<div className="profile-page">



<div className="profile-card">


<div className="avatar-frame">


👑


</div>



<h1>

{player.name}

</h1>



<div className="vip">

VIP {player.vip}

</div>




<div className="stats">


<div>

⭐ Level

<b>{player.level}</b>

</div>



<div>

⚔ Lực chiến

<b>{player.power}</b>

</div>



<div>

🪙 Gold

<b>{player.gold}</b>

</div>



<div>

💎 Diamond

<b>{player.diamond}</b>

</div>


</div>






<div className="battle-info">


<h2>

⚔ Thành tích

</h2>


<p>

🎮 Tổng trận: {player.battle}

</p>


<p>

🏆 Thắng: {player.win}

</p>


<p>

💀 Thua: {player.lose}

</p>


</div>







<div className="profile-buttons">


<button

onClick={()=>nav("/pet")}

>

🐾 Quản lý Pet

</button>



<button

onClick={()=>nav("/wallet")}

>

💎 Ví tài sản

</button>



<button

onClick={()=>nav("/ranking")}

>

🏆 Xếp hạng

</button>



</div>




</div>



</div>


)


}

