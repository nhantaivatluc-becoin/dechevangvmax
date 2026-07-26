import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./SideMenu.css";


export default function SideMenu({user}){


const [open,setOpen]=useState(false);


const navigate=useNavigate();



const menu=[


{
icon:"🏠",
name:"Trang chủ",
path:"/"
},


{
icon:"👑",
name:"VIP",
path:"/vip"
},


{
icon:"💰",
name:"Nạp tiền",
path:"/deposit"
},


{
icon:"💼",
name:"Ví tài sản",
path:"/wallet"
},


{
icon:"🏦",
name:"Rút tiền",
path:"/withdraw"
},


{
icon:"📈",
name:"Chứng khoán",
path:"/stock"
},


{
icon:"₿",
name:"Crypto",
path:"/crypto"
},


{
icon:"💬",
name:"Chat thế giới",
path:"/chat"
},


{
icon:"👥",
name:"Bạn bè",
path:"/friends"
},


{
icon:"🏰",
name:"Bang hội",
path:"/guild"
}


];





return(


<>


<button

className="menu-button"

onClick={()=>setOpen(!open)}

>

☰

</button>







<div

className={

open

?

"side-menu active"

:

"side-menu"

}

>





<div className="menu-user">


<div className="avatar">

👤

</div>


<h3>

{user?.username || "User"}

</h3>


<p>

VIP {user?.vip || 0}

</p>



</div>








<div className="menu-list">


{

menu.map((item,index)=>(


<div

className="menu-item"

key={index}

onClick={()=>{


navigate(item.path);

setOpen(false);


}}

>


<span>

{item.icon}

</span>


{item.name}


</div>


))


}


</div>







<div

className="admin-area"

onClick={()=>navigate("/admin-login")}

>


🔐 ADMIN LOGIN


</div>






</div>





{

open &&

<div

className="menu-overlay"

onClick={()=>setOpen(false)}

></div>


}




</>


)


}

