import "./VipBadge.css";

import {
useGame
} from "../store/GameStore";


export default function VipBadge(){


const {
vip
}=useGame();



return(

<div className={`vip-badge vip-${vip}`}>


👑 VIP {vip}


</div>


)


}
