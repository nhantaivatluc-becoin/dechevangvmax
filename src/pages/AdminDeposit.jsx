import React,{useEffect,useState} from "react";
import "./AdminDeposit.css";
import {isAdmin} from "../config/admin";


export default function AdminDeposit(){


const [user,setUser]=useState({});

const [message,setMessage]=useState("");




function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setUser(data);


}





useEffect(()=>{


load();


},[]);






if(!isAdmin(user.telegramId)){


return(

<div className="admin-page">

<h1>

⛔ KHÔNG CÓ QUYỀN ADMIN

</h1>

</div>

)


}







function approveVip(){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);





if(!data.pendingVip){


setMessage(
"Không có VIP chờ duyệt"
);


return;


}





data.vip=

Number(

data.pendingVip.level

);





data.vipHistory=

data.vipHistory||[];





data.vipHistory.push({

level:data.pendingVip.level,

price:data.pendingVip.price,

time:new Date().toLocaleString()

});







delete data.pendingVip;






localStorage.setItem(

"user",

JSON.stringify(data)

);



load();



window.dispatchEvent(

new Event("financeUpdate")

);



setMessage(

"✅ Đã duyệt VIP thành công"

);



}









function rejectVip(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



delete data.pendingVip;



localStorage.setItem(

"user",

JSON.stringify(data)

);



load();



setMessage(
"❌ Đã từ chối VIP"
);


}









return(



<div className="admin-page">






<h1>

👑 ADMIN PANEL

</h1>





<div className="admin-card">



<h2>

🎮 TÀI KHOẢN ADMIN

</h2>



<p>

Telegram ID:

<b>

8454844333

</b>

</p>



</div>










<div className="admin-card">



<h2>

👑 DUYỆT VIP

</h2>





{

user.pendingVip ?


<>


<p>

VIP:

<b>

{user.pendingVip.level}

</b>

</p>



<p>

💵 Giá:

<b>

{
Number(
user.pendingVip.price
)
.toLocaleString()

}

 VNĐ

</b>

</p>



<p>

⏱

{user.pendingVip.time}

</p>




<button

onClick={approveVip}

>

✅ DUYỆT VIP

</button>






<button

className="reject"

onClick={rejectVip}

>

❌ TỪ CHỐI

</button>



</>


:

<p>

Không có yêu cầu VIP

</p>



}




</div>










<h3>

{message}

</h3>






</div>


)


}
