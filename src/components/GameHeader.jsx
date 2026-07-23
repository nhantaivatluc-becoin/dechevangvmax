import React from "react";
import { getPlayer } from "../services/player";
import "./GameHeader.css";


export default function GameHeader(){

const player = getPlayer();


return (

<div className="game-header">


<div className="player-info">

<div className="avatar">

👤

</div>


<div>

<div className="player-name">

{player?.username || "Player"}

</div>


<div className="vip">

👑 VIP {player?.vip || 0}

</div>


</div>


</div>



<div className="resource-box">

<div>
💰
<br/>
{player?.gold || 1000}
</div>


<div>
💎
<br/>
{player?.diamond || 0}
</div>


</div>



</div>

)

}
