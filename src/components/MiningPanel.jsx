import "./MiningPanel.css";

import {useState,useEffect} from "react";


export default function MiningPanel({price,onMine}){


const [vip,setVip]=useState(0);


const [pet,setPet]=useState(1);



const speed =

0.5 *

(price/1000) *

(1+vip*0.1) *

pet;



useEffect(()=>{


const timer=setInterval(()=>{


onMine(speed);


},60000);



return()=>clearInterval(timer);


},[speed]);




return(


<div className="mining-panel">


<h2>

⛏️ AUTO MINING

</h2>



<div>

⚡ Tốc độ:

<b>

+{speed.toFixed(2)}

</b>

Gold/phút

</div>




<div>

⭐ VIP:

<select

value={vip}

onChange={e=>setVip(Number(e.target.value))}

>


{

[0,1,2,3,4,5].map(v=>(

<option key={v} value={v}>

VIP {v}

</option>

))

}


</select>


</div>





<div>

🐾 Pet:

<select

value={pet}

onChange={e=>setPet(Number(e.target.value))}

>


<option value="1">

Pet thường

</option>


<option value="1.5">

Pet bạc

</option>


<option value="2">

Pet vàng

</option>


<option value="3">

Pet kim cương

</option>


</select>


</div>




</div>


)

}
