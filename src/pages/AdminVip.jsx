import React from "react";

import {useNavigate} from "react-router-dom";

import "./AdminVip.css";


export default function AdminVip(){


const nav=useNavigate();



if(localStorage.getItem("admin")!=="true"){


return null;


}



return(


<div className="admin-page">


<h1>

👑 QUẢN TRỊ VIP

</h1>



<div className="admin-card">


<h2>

Danh sách nâng VIP

</h2>


<p>

User: Player01

</p>


<p>

VIP hiện tại: 5

</p>



<button>

+ VIP

</button>



</div>





<button

onClick={()=>nav("/admin-deposit")}

>

💰 Quản lý nạp tiền

</button>




</div>


)


}

