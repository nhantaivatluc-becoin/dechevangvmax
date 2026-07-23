import React from "react";

import "./AdminDeposit.css";


export default function AdminDeposit(){



if(localStorage.getItem("admin")!=="true"){


return null;


}



return(


<div className="admin-page">


<h1>

💰 NẠP VIP

</h1>



<div className="bank-box">


<h2>

🏦 BIDV

</h2>


<p>

STK: 8830541999

</p>


<p>

Chủ TK:

NGUYEN NGOC ANH

</p>



</div>





<div className="deposit">


<p>

Đơn nạp đang chờ:

</p>


<p>

User001 - VIP 10

</p>



<button>

Duyệt

</button>



</div>


</div>


)


}

