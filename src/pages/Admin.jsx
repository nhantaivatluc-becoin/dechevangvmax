import React,{useState,useEffect} from "react";
import "./Admin.css";


export default function Admin(){


const [tab,setTab]=useState("dashboard");


const [stats,setStats]=useState({

users:0,

vip:0,

gold:0,

money:0

});





useEffect(()=>{


let users=

JSON.parse(

localStorage.getItem("members")||"[]"

);



let orders=

JSON.parse(

localStorage.getItem("vipOrders")||"[]"

);



setStats({


users:users.length,


vip:

users.filter(

u=>u.vip>0

).length,


gold:

users.reduce(

(a,b)=>a+Number(b.gold||0)

,0),



money:

orders.reduce(

(a,b)=>a+Number(b.amount||0)

,0)


});



},[]);









return(



<div className="admin-center">





<div className="admin-header">


👑 ADMIN CONTROL CENTER


<p>

DECHEVANGVMAX

</p>


</div>







<div className="admin-stats">



<div>

👥

<h2>

{stats.users}

</h2>

User

</div>




<div>

👑

<h2>

{stats.vip}

</h2>

VIP

</div>




<div>

🪙

<h2>

{stats.gold}

</h2>

Gold

</div>





<div>

💰

<h2>

{stats.money}

</h2>

VNĐ

</div>



</div>








<div className="admin-menu">



<button onClick={()=>setTab("users")}>

👥 Thành viên

</button>



<button onClick={()=>setTab("money")}>

💰 Tài chính

</button>



<button onClick={()=>setTab("pet")}>

🐾 Pet

</button>



<button onClick={()=>setTab("investment")}>

🌍 Investment

</button>



<button onClick={()=>setTab("pvp")}>

⚔️ PVP

</button>



<button onClick={()=>setTab("system")}>

⚙️ Hệ thống

</button>



</div>








<div className="admin-content">



{

tab==="dashboard" &&

<h2>

📊 Tổng quan Server

</h2>

}






{

tab==="users" &&

<h2>

👥 Quản lý toàn bộ thành viên

</h2>

}





{

tab==="money" &&

<h2>

💰 Quản lý nạp/rút/VIP

</h2>

}





{

tab==="pet" &&

<h2>

🐾 Quản lý thú cưng

</h2>

}





{

tab==="investment" &&

<h2>

🌍 Quản lý đầu tư

</h2>

}





{

tab==="pvp" &&

<h2>

⚔️ Quản lý PVP

</h2>

}





{

tab==="system" &&

<h2>

⚙️ Cấu hình game

</h2>

}




</div>







</div>



)



}
