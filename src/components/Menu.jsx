import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {isAdmin} from "../config/admin";

import "./Menu.css";



export default function Menu(){


const [open,setOpen]=useState(false);


const [admin,setAdmin]=useState(false);



const [music,setMusic]=useState(

localStorage.getItem("music")!=="off"

);






useEffect(()=>{


let user=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setAdmin(

isAdmin(user.telegramId)

);





window.openGameMenu=()=>{

setOpen(true);

};





return()=>{

delete window.openGameMenu;

};


},[]);









function closeMenu(){


setOpen(false);


}








function toggleMusic(){



let value=!music;



setMusic(value);



localStorage.setItem(

"music",

value?"on":"off"

);



window.dispatchEvent(

new Event("musicChange")

);



}







return(


<>



{

open &&


<div

className="menu-overlay"

onClick={closeMenu}

></div>


}







<div

className={

open?

"side-menu open":

"side-menu"

}

>







<div className="menu-header">


☰ MENU



<button

onClick={closeMenu}

>

✕

</button>


</div>








<Link

to="/wallet"

onClick={closeMenu}

>

💎 Ví tài sản

</Link>







<Link

to="/deposit"

onClick={closeMenu}

>

💰 Nạp tiền

</Link>







<Link

to="/withdraw"

onClick={closeMenu}

>

🏦 Rút tiền

</Link>







<Link

to="/shop"

onClick={closeMenu}

>

🛒 Shop thú cưng

</Link>







<Link

to="/pet-pvp"

onClick={closeMenu}

>

⚔️ PVP Thú Cưng

</Link>







<Link

to="/investment"

onClick={closeMenu}

>

🌍 Đầu tư toàn cầu

</Link>







<Link

to="/gift-code"

onClick={closeMenu}

>

🎁 Gift Code

</Link>







<Link

to="/friend"

onClick={closeMenu}

>

👥 Mời bạn bè

</Link>







<Link

to="/ranking"

onClick={closeMenu}

>

🏆 Bảng xếp hạng

</Link>







<div

className="menu-item"

onClick={toggleMusic}

>

🎵 Nhạc:

<b>

{

music?

" BẬT":

" TẮT"

}

</b>

</div>







<Link

to="/settings"

onClick={closeMenu}

>

⚙️ Cài đặt

</Link>








{

admin &&

<>


<div className="admin-title">

👑 ADMIN

</div>



<Link

to="/admin-deposit"

onClick={closeMenu}

className="admin-link"

>

💰 Duyệt VIP

</Link>





<Link

to="/admin-members"

onClick={closeMenu}

className="admin-link"

>

👥 Quản lý thành viên

</Link>



</>



}





</div>



</>



)


}
