import "./User.css";

import {useState} from "react";


export default function User(){


const [vip,setVip]=useState(0);


function upgrade(){

if(vip < 15){

setVip(vip+1);

}

}



return (

<div className="user-page">


<h1>
👤 NHÂN VẬT
</h1>



<div className="profile">


<div className="avatar">

👑

</div>


<h2>
Player
</h2>


<p>
🆔 ID: 10001
</p>


<div className="vip">

⭐ VIP {vip}

</div>


</div>





<div className="vip-box">


<h2>
⭐ VIP SYSTEM
</h2>


<p>

VIP Level:

<b>
{vip}/15
</b>

</p>



<div className="vip-bar">


<div

className="vip-fill"

style={{

width:(vip/15*100)+"%"

}}


/>


</div>




<button onClick={upgrade}>

⬆️ NÂNG VIP

</button>



</div>




<div className="benefit">


<h2>
🎁 Quyền lợi
</h2>


<p>
✅ Tăng tốc đào vàng
</p>


<p>
✅ Thưởng thêm Gold
</p>


<p>
✅ Mở Pet VIP
</p>


<p>
✅ Sự kiện riêng
</p>


</div>



</div>


)

}
