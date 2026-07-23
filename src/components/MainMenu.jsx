import "./MainMenu.css";


export default function MainMenu({openPage,closeMenu}){


const admin=

localStorage.getItem("isAdmin");


return(

<div className="main-menu">


<button onClick={closeMenu}>
❌
</button>


<button onClick={()=>openPage("Home")}>
🏠 Trang Chủ
</button>


<button onClick={()=>openPage("PetFarm")}>
🌱 Farm Pet
</button>


<button onClick={()=>openPage("PetShop")}>
🛒 Shop Pet
</button>


<button onClick={()=>openPage("Vip")}>
👑 VIP SHOP
</button>


<button onClick={()=>openPage("Guild")}>
🏰 Bang Hội
</button>



{

admin &&

<button onClick={()=>openPage("AdminVip")}>

🏢 Admin VIP

</button>

}



{

!admin &&

<button onClick={()=>openPage("AdminLogin")}>

🔐 Admin Login

</button>

}



</div>

)

}
