import "./AutoMining.css";


import {

useGame

} from "../store/GameStore";



export default function AutoMining(){



const {

miningRate

}=useGame();



return(


<div className="auto-mining">


🤖 Robot đang đào vàng


<br/>


⛏️ +{miningRate} Gold / phút



</div>


)



}
