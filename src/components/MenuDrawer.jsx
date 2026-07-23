import "./MenuDrawer.css";


export default function MenuDrawer({

open,

close

}){


if(!open)return null;



return(


<div className="menu-overlay" onClick={close}>


<div

className="menu-drawer"

onClick={(e)=>e.stopPropagation()}

>



<div className="menu-header">

🚀 DECHEVANGVMAX

<p>

Hệ sinh thái Game & Đầu tư

</p>

</div>



<div className="menu-section">


<h3>

📈 ĐẦU TƯ

</h3>



<button>

📊 Chứng khoán

<span>

VN30 • Cổ phiếu • Quỹ

</span>

</button>



<button>

🪙 Thị trường vàng

<span>

Giá vàng realtime

</span>

</button>



<button>

💹 Crypto

<span>

Coin Market

</span>

</button>


</div>





<div className="menu-section">


<h3>

🎮 GAME TOÀN QUỐC

</h3>



<button>

🎡 Wheel

</button>


<button>

⛏ Đào vàng

</button>


<button>

🐾 Pet

</button>


<button>

⚔ PVP

</button>


</div>





<div className="menu-section">


<h3>

🛒 MUA SẮM

</h3>


<button>

🛍 Shop vật phẩm

</button>


<button>

🐲 Pet nâng cấp

</button>


<button>

👑 VIP Store

</button>



</div>





<div className="menu-section">


<h3>

💰 VÍ CHÍNH

</h3>


<button>

💳 Nạp tiền

</button>


<button>

🏦 Rút tiền

</button>


</div>




<div className="menu-section">


<h3>

🏆 CỘNG ĐỒNG

</h3>


<button>

🌎 BXH toàn quốc

</button>


<button>

🎁 Event

</button>


<button>

👥 Bạn bè

</button>


</div>




<button

className="close-menu"

onClick={close}

>

ĐÓNG MENU

</button>



</div>


</div>


)


}
