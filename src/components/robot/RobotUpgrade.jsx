import React,{useState} from "react";

import "./RobotUpgrade.css";


export default function RobotUpgrade(){


const [level,setLevel]=useState(1);


const [gold,setGold]=useState(0);



const maxLevel=15;




const upgradePrice=level*10000;




function upgrade(){


if(level>=maxLevel)return;



if(gold<upgradePrice){


alert("Không đủ Gold");


return;


}



setGold(

gold-upgradePrice

);



setLevel(

level+1

);



}





return(


<div className="upgrade-box">


<h2>

🤖 Nâng Cấp Robot

</h2>



<div className="robot-level">


Robot Level

<strong>

{level}/{maxLevel}

</strong>


</div>





<p>


⛏ Tốc độ đào:

x{level}


</p>





<p>


💰 Giá nâng cấp:

{upgradePrice.toLocaleString()}

Gold


</p>






<button

onClick={upgrade}

disabled={level>=maxLevel}

>


{

level>=maxLevel

?

"⭐ Robot MAX"

:

"⬆ Nâng cấp Robot"

}


</button>





</div>


)


}

