import {useUser} from "../context/UserContext";


export default function LaunchNotice(){


const {user}=useUser();



return(

<div className="launch-notice">


<h2>

🚀 DECHEVANGVMAX

</h2>


<p>

MẶT CHÍNH THỨC 24/07/26

</p>



<hr />



<h3>

🎮 TIÊU CHÍ THAM GIA

</h3>



<div className="notice-item">

⛏ Đào vàng mỗi ngày

<br/>

<span>

+0.50 GOLD / phút

</span>

</div>



<div className="notice-item">

💎 Diamond theo thời gian thật

<br/>

<span>

💎 {user?.diamond || 0} DIAMOND

</span>

</div>




<div className="notice-item">

👑 VIP tăng tốc độ đào

<br/>

<span>

VIP hiện tại: {user?.vip || 0}

</span>

</div>




<div className="notice-item">

🏆 Đua TOP nhận thưởng

<br/>

<span>

TOP: #{user?.rank || 0}

</span>

</div>




<div className="notice-item">

🎁 Event hàng ngày

<br/>

<span>

🔥 Đang diễn ra

</span>

</div>




</div>

)

}
