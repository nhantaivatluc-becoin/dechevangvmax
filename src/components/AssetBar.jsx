import React from "react";
import "./AssetBar.css";


export default function AssetBar(){

const user = {

gold:1000,
diamond:0,
vnd:0,
vip:0

};


return(

<div className="asset-bar">


<div className="asset-item">

🪙

<span>

{user.gold.toLocaleString()}

</span>

Gold

</div>



<div className="asset-item">

💎

<span>

{user.diamond}

</span>

Diamond

</div>



<div className="asset-item">

💵

<span>

{user.vnd.toLocaleString()}đ

</span>

VNĐ

</div>



<div className="asset-item vip">

👑 VIP {user.vip}

</div>


</div>

)

}
