import "./AssetHUD.css";


import {

useEffect,

useState

} from "react";


import {

useGame

} from "../store/GameStore";



export default function AssetHUD(){



const {

gold,

diamond,

cashValue

}=useGame();



const [oldGold,setOldGold]=useState(gold);

const [oldDiamond,setOldDiamond]=useState(diamond);



const [goldUp,setGoldUp]=useState(true);

const [diamondUp,setDiamondUp]=useState(true);





useEffect(()=>{


setGoldUp(gold>=oldGold);


setOldGold(gold);


},[gold]);





useEffect(()=>{


setDiamondUp(diamond>=oldDiamond);


setOldDiamond(diamond);



},[diamond]);






return(


<div className="asset-hud">





<div className={goldUp ? "hud-item up" : "hud-item down"}>



<div className="animal">


{

goldUp

?

"🐰"

:

"🐢"

}


</div>



🟡 GOLD



<br/>


<b>

{Math.floor(gold).toLocaleString()}

</b>



<span>


{

goldUp

?

"🐰 đang nhảy tăng giá"

:

"🐢 đang tụt giá"

}



</span>



</div>








<div className={diamondUp ? "hud-item up" : "hud-item down"}>



<div className="animal">


{

diamondUp

?

"🐸"

:

"🐌"

}


</div>




💎 DIAMOND



<br/>


<b>

{diamond.toFixed(6)}

</b>




<span>


{

diamondUp

?

"🐸 nhảy lên"

:

"🐌 bò xuống"

}



</span>



</div>









<div className="hud-item money-hud">


💰 VNĐ


<br/>


<b>

{cashValue.toLocaleString()}

</b>


</div>






</div>


)



}
