export default function GoldDisplay({user}){


return(

<div className="gold-panel">


<div className="gold-title">
💰 GOLD
</div>


<div className="gold-number">
{user?.gold || 1000}
</div>


<div className="resource-row">

<span>
💎 {user?.diamond || 0}
</span>


<span>
👑 VIP {user?.vip || 0}
</span>

</div>


</div>

)

}
