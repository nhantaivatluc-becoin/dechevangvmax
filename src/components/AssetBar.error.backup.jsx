import "./AssetBar.css";

import {useContext} from "react";

import {WalletContext} from "../context/WalletContext";


export default function AssetBar(){


let wallet={

gold:0,

diamond:0,

vnd:0

};


try{

const data=useContext(WalletContext);

wallet=data?.wallet || wallet;

}catch(e){}



return(

<div className="asset-bar">


<div className="asset gold">

🪙 GOLD

<br/>

{Number(wallet.gold||0).toLocaleString()}

</div>


<div className="asset diamond">

💎 DIAMOND

<br/>

{Number(wallet.diamond||0).toFixed(3)}

</div>


<div className="asset vnd">

🇻🇳 VNĐ

<br/>

{Number(wallet.vnd||0).toLocaleString()}đ

</div>


</div>

)


}
