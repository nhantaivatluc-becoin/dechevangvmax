import {useState} from "react";
import {Link} from "react-router-dom";


export default function TopMenu(){


const [open,setOpen]=useState(false);



return (

<>

<div className="top-bar">


<div className="logo">

🐉 ĐẾ CHẾ VÀNG

</div>


<button 
className="menu-button"
onClick={()=>setOpen(true)}
>

☰

</button>


</div>



{

open &&

<div 
className="menu-overlay"
onClick={()=>setOpen(false)}
></div>

}



<div className={open?"drawer show":"drawer"}>


<button

className="close-menu"

onClick={()=>setOpen(false)}

>

✕

</button>


<h2>
👑 MENU
</h2>



<Link to="/wallet">
💳 Ví của tôi
</Link>


<Link to="/deposit">
💰 Nạp tiền
</Link>


<Link to="/withdraw">
🏦 Rút tiền
</Link>


<Link to="/exchange">
💎 Đổi vàng
</Link>


<Link to="/giftcode">
🎁 GiftCode
</Link>


<Link to="/ranking">
🏆 Bảng xếp hạng
</Link>


<Link to="/invite">
👥 Mời bạn bè
</Link>


<Link to="/mission">
📜 Nhiệm vụ
</Link>


<a href="https://t.me/DeCheVangCommunity">
💬 Cộng đồng
</a>



</div>


</>


)

}

