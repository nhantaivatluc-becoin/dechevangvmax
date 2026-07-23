import React from "react";
import "./PlayerAvatar.css";


export default function PlayerAvatar({
name,
vip,
level
}){


return(

<div className="player-box">


<div className="avatar">

👑

</div>


<h3>{name}</h3>


<p>
⭐ Level {level}
</p>


<p>
💎 VIP {vip}
</p>


<span>
🟢 Online
</span>


</div>

)

}

