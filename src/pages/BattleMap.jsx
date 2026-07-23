import {useState} from "react";
import "./BattleMap.css";


export default function BattleMap(){


const [attack,setAttack]=useState(false);


const [bossHp,setBossHp]=useState(10000);


const [reward,setReward]=useState(0);





function fight(){


setAttack(true);



setTimeout(()=>{


setAttack(false);



const damage=Math.floor(

Math.random()*1500

)+500;



const hp=Math.max(

0,

bossHp-damage

);



setBossHp(hp);



if(hp===0){


setReward(reward+1000);


setBossHp(10000);


}



},800);



}





return(


<div className="map-page">


<div className="map-glass">



<h1>

🗺️ CHIẾN TRƯỜNG BANG

</h1>




<div className="map-area">



<div

className={

attack?

"hero run":

"hero"

}

>

🧙

</div>




<div

className={

attack?

"boss hit":

"boss"

}

>

🐉

</div>



</div>





<div className="boss-status">


❤️ Boss:

{bossHp}/10000


</div>




<button

onClick={fight}

>

⚔️ XUẤT CHIẾN

</button>



<div className="reward">


🎁 Thưởng:

{reward}


</div>




</div>


</div>


)

}
