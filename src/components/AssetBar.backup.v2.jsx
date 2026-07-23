import "./AssetBar.css";

import {
useWallet
} from "../context/WalletContext";


export default function AssetBar(){


const {

wallet

}=useWallet();



return(


<div className="asset-bar">


<div className="asset gold">

🪙 GOLD

<strong>

{Number(wallet?.gold || 0).toLocaleString()}

</strong>


</div>



<div className="asset diamond">


💎 DIAMOND


<strong>

{Number(wallet?.diamond || 0).toFixed(3)}

</strong>


</div>



<div className="asset vnd">


🇻🇳 VNĐ


<strong>

{Number(wallet?.vnd || 0).toLocaleString()}đ

</strong>


</div>



</div>


)

}
