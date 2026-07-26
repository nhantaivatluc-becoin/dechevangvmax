import React from "react";
import { useNavigate } from "react-router-dom";
import Mining from "../components/Mining";
import "./Home.css";

export default function Home(){

const navigate = useNavigate();

return (

<div className="home-page">

<Mining />


<div className="home-card">

<h2>🐔 FARM & PET</h2>

<p>
Nâng cấp thú nuôi để tăng tốc đào
</p>

<button onClick={()=>navigate("/farm")}>
VÀO FARM
</button>

</div>



<div className="home-card">

<h2>🌍 ĐẦU TƯ TOÀN CẦU</h2>

<p>
Đầu tư tài sản sinh lợi nhuận
</p>

<button onClick={()=>navigate("/investment")}>
ĐẦU TƯ
</button>

</div>



<div className="home-card">

<h2>🎡 LUCKY WHEEL</h2>

<p>
Quay thưởng hằng ngày
</p>

<button onClick={()=>navigate("/wheel")}>
QUAY
</button>

</div>



<div className="home-card">

<h2>🛒 CỬA HÀNG</h2>

<p>
Mua PET - VIP - Vật phẩm
</p>

<button onClick={()=>navigate("/shop")}>
SHOP
</button>

</div>



<div className="home-card">

<h2>👑 VIP SYSTEM</h2>

<p>
Nâng cấp VIP nhận đặc quyền
</p>

<button onClick={()=>navigate("/vip")}>
VIP
</button>

</div>


</div>

);

}
