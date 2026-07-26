import React,{useState} from "react";
import "./DailyReward.css";


export default function DailyReward({user}){


const API="http://localhost:3000/api/daily/claim";


const vip=user?.vip || 0;

const userId=user?.id;



const [message,setMessage]=useState("");



const normalRewards=[

"🪙 +100 Gold",
"🪙 +200 Gold",
"⚡ +20 Energy",
"🪙 +500 Gold",
"🎁 Hộp quà",
"💎 +0.01 Diamond",
"👑 Siêu thưởng"

];



const vipRewards=[

"👑 +500 Gold +0.01 Diamond",
"💎 +0.02 Diamond",
"⚡ +100 Energy",
"🪙 +2000 Gold",
"🎁 VIP BOX",
"💎 +0.05 Diamond",
"👑 VIP Jackpot"

];





async function claim(type,day){


try{


const res=await fetch(API,{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

userId,

type,

day

})


});



const data=await res.json();



if(data.success){


setMessage(

`✅ Nhận thành công +${data.gold} Gold +${data.diamond} Diamond`

);


}else{


setMessage(

"❌ "+data.message

);


}



}catch(e){


setMessage(

"❌ Lỗi kết nối server"

);


}



}





return(


<div className="daily-container">



<h1>

🎁 ĐIỂM DANH HÀNG NGÀY

</h1>



<div className="daily-box">


<h2>

🌟 Điểm danh thường

</h2>



{

normalRewards.map((item,index)=>(


<div className="reward-card"

key={index}

>


<p>

Ngày {index+1}

</p>


<strong>

{item}

</strong>



<button

onClick={()=>claim(

"normal",

index+1

)}

>

NHẬN QUÀ

</button>


</div>


))


}



</div>







<div className="daily-box vip-box">


<h2>

👑 Điểm danh VIP

</h2>



{

vip>=1 ?



vipRewards.map((item,index)=>(


<div className="reward-card vip-card"

key={index}

>


<p>

VIP Ngày {index+1}

</p>


<strong>

{item}

</strong>



<button

onClick={()=>claim(

"vip",

index+1

)}

>

NHẬN QUÀ VIP

</button>


</div>


))



:


<div className="lock">

🔒 Cần VIP 1 trở lên

</div>


}




</div>





<div className="daily-message">

{message}

</div>



</div>



)


}

