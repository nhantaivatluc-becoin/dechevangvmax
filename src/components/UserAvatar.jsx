import "./UserAvatar.css";

import {
useEffect,
useState
} from "react";


export default function UserAvatar(){


const [vip,setVip]=useState(0);

const [avatar,setAvatar]=useState(
"/default-avatar.png"
);





useEffect(()=>{


// lấy dữ liệu user sau này từ API / Telegram

const userData = JSON.parse(

localStorage.getItem("user")

|| "{}"

);





if(userData.vip){

setVip(userData.vip);

}



if(userData.avatar){

setAvatar(userData.avatar);

}



},[]);







return(


<div

className={`user-avatar-box vip-${vip}`}

>




<div className="avatar-vip-ring">



<img

src={avatar}

alt="avatar"

onError={(e)=>{

e.target.src="/default-avatar.png"

}}

/>



</div>





<div className="vip-badge">


👑 VIP {vip}



</div>





</div>



)


}
