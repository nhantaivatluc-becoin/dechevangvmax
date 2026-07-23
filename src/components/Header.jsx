import "./Header.css";


import {

useGame

} from "../store/GameStore";



export default function Header(){



const {

gold,

diamond,

cashValue

}=useGame();





return(


<div className="header">



<div className="logo-mini">

👑

</div>





<div className="asset-mini">



<div className="asset gold">

🟡 {Math.floor(gold).toLocaleString()}

</div>



<div className="asset diamond">

💎 {diamond.toFixed(6)}

</div>



<div className="asset money">

💰 {cashValue.toLocaleString()}đ

</div>



</div>




</div>


)


}
