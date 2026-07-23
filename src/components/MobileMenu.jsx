import {useState} from "react";
import {Link} from "react-router-dom";
import "./MobileMenu.css";


export default function MobileMenu(){

const [open,setOpen]=useState(false);



const menus=[

{
icon:"🏠",
name:"Trang Chủ",
path:"/"
},


{
icon:"👑",
name:"VIP",
path:"/vip",
vip:true
},


{
icon:"💰",
name:"Ví Tiền",
path:"/wallet"
},


{
icon:"🌾",
name:"Farm",
path:"/farm"
},


{
icon:"🎡",
name:"Vòng Quay",
path:"/wheel"
},


{
icon:"🛒",
name:"Cửa Hàng",
path:"/shop"
},


{
icon:"🎁",
name:"GiftCode",
path:"/giftcode"
},


{
icon:"🏆",
name:"Xếp Hạng",
path:"/ranking"
},


{
icon:"👥",
name:"Mời Bạn Bè",
path:"/invite"
},


{
icon:"⚔️",
name:"Bang Hội",
path:"/guild"
}

];



return(

<>


<button

className="menu-button"

onClick={()=>setOpen(true)}

>

☰

</button>




{open &&

<div

className="menu-overlay"

onClick={()=>setOpen(false)}

></div>

}




<div className={open?"side-menu active":"side-menu"}>



<div className="menu-title">

👑 ĐẾ CHẾ VÀNG


<button

onClick={()=>setOpen(false)}

>

✖

</button>


</div>




{

menus.map((item,index)=>(


<Link

key={index}

to={item.path}

onClick={()=>setOpen(false)}

className={

item.vip

?

"menu-item vip-button"

:

"menu-item"

}


>


<span>

{item.icon}

</span>


{item.name}


</Link>


))


}



</div>


</>

)

}
