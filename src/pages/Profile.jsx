import React from "react";
import "./Profile.css";

export default function Profile(){

return (

<div className="profile-page">


<header className="profile-header">

<div className="profile-avatar">
👤
</div>

<h1>
Player
</h1>

<p>
Telegram User
</p>

</header>



<section className="profile-stats">


<div>
⭐
<strong>
Level 1
</strong>

<small>
EXP 0/1000
</small>

</div>


<div>
👑
<strong>
VIP 0
</strong>

<small>
Member
</small>

</div>



<div>
🏆
<strong>
Bronze
</strong>

<small>
Rank
</small>

</div>


</section>




<section className="assets">


<h2>
💰 Tài sản
</h2>


<div className="asset-box">

🪙 Gold

<b>
1000
</b>

</div>


<div className="asset-box">

💎 Diamond

<b>
0
</b>

</div>


<div className="asset-box">

📈 Stock

<b>
0 đ
</b>

</div>



</section>




<section className="achievement">


<h2>
🏆 Thành tích
</h2>


<div>
⛏ Đã đào: 0 lần
</div>


<div>
🎮 Game thắng: 0
</div>


<div>
🏰 Guild: Chưa có
</div>



</section>




</div>

)

}
