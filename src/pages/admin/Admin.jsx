import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./AdminDashboard.css";


export default function Admin(){


const navigate=useNavigate();



useEffect(()=>{


const admin=

localStorage.getItem("admin");


if(admin!=="true"){


navigate("/admin-login");


}


},[navigate]);





const data=[


{
icon:"👥",
title:"Tổng User",
value:"0"
},


{
icon:"💰",
title:"Nạp tiền",
value:"0 yêu cầu"
},


{
icon:"🏦",
title:"Rút tiền",
value:"0 yêu cầu"
},


{
icon:"👑",
title:"VIP",
value:"30 cấp"
},


{
icon:"📈",
title:"Đầu tư",
value:"Realtime"
},


{
icon:"⚙️",
title:"Hệ thống",
value:"Online"
}



];







return(


<div className="admin-dashboard">



<h1>

👑 ADMIN DASHBOARD

</h1>



<p className="admin-status">

🟢 Hệ thống đang hoạt động

</p>






<div className="admin-grid">



{

data.map((item,index)=>(


<div

className="admin-card"

key={index}

>


<div className="admin-icon">

{item.icon}

</div>


<h2>

{item.title}

</h2>


<strong>

{item.value}

</strong>



</div>


))


}



</div>









<div className="admin-panel">


<h2>

🛠 QUẢN TRỊ

</h2>



<button>

👥 Quản lý User

</button>



<button>

💰 Duyệt nạp tiền

</button>



<button>

🏦 Duyệt rút tiền

</button>



<button>

👑 Quản lý VIP

</button>



<button>

📈 Quản lý đầu tư

</button>




</div>






</div>



)


}

