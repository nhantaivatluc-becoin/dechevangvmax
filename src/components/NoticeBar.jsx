import React,{useEffect,useState} from "react";
import "./NoticeBar.css";


export default function NoticeBar(){


const [username,setUsername]=useState("User");


useEffect(()=>{


try{


const tg=window.Telegram?.WebApp;


if(tg?.initDataUnsafe?.user){


const user=tg.initDataUnsafe.user;


setUsername(

user.first_name ||

user.username ||

"User"

);


}


}catch(e){


console.log(e);


}


},[]);



const messages=[


`🎉 Chào mừng ${username} đã tham gia Đế Chế Vàng VMAX`,


"🚀 Đế Chế Vàng chính thức ra mắt ngày 24/7/2026",


"👑 Chúc mừng thành viên mới nâng cấp VIP thành công",


"⛏️ Các miner đang khai thác vàng realtime",


"💎 Gold đổi Diamond - Diamond đổi VNĐ"


];



return(


<div className="notice-box">


<div className="notice-run">


{

messages.map((m,i)=>(

<span key={i}>

{m}

&nbsp;&nbsp;&nbsp;&nbsp;

</span>

))

}


</div>


</div>


)


}
