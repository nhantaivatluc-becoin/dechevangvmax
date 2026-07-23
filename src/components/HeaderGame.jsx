import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";


export default function HeaderGame(){


const {user}=useContext(UserContext);


return(

<div className="header-game">


<div className="player">


👑

<div>

<b>
{user?.username || "Người chơi"}
</b>

<br/>

VIP {user?.vip || 0}

</div>


</div>



<div className="resource">

💰 {user?.gold || 0}

</div>


<div className="resource">

💎 {user?.diamond || 0}

</div>



<div className="resource">

👑 {user?.vip || 0}

</div>



<Link to="/menu">

☰

</Link>


</div>

)

}

