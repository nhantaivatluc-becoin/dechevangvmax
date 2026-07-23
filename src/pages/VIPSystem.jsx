import {useState} from "react";
import "./VIPSystem.css";


export default function VIPSystem(){


const [vip,setVip]=useState(

Number(localStorage.getItem("vip"))

||0

);



function buyVIP(){


let v=vip+1;


if(v>15)

v=15;



setVip(v);


localStorage.setItem(

"vip",

v

);


}



return(

<div className="vip-page">


<h1>

👑 HỆ THỐNG VIP

</h1>



<div className="vip-card">


<h2>

VIP {vip}/15

</h2>


<p>

🎁 Quà nhận mỗi ngày

</p>


<p>

⚡ Tăng tốc đào vàng

</p>


<p>

🐾 Tăng sức mạnh Pet

</p>



<button onClick={buyVIP}>

⬆️ Nâng VIP

</button>


</div>



</div>

)

}
