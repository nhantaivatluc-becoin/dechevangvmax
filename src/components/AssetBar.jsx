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



<div className="asset-card gold-card">

<span>

🪙 GOLD

</span>


<strong>

{Number(wallet?.gold || 0).toLocaleString()}

</strong>


</div>




<div className="asset-card diamond-card">


<span>

💎 DIAMOND

</span>


<strong>

{Number(wallet?.diamond || 0).toFixed(3)}

</strong>


</div>





<div className="asset-card vnd-card">


<span>

🇻🇳 VNĐ

</span>


<strong>

{Number(wallet?.vnd || 0).toLocaleString()}đ

</strong>


</div>



</div>


)

}
