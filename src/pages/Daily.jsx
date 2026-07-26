import React,{useEffect,useState} from "react";

import DailyReward from "../components/daily/DailyReward";

import "./Daily.css";



export default function Daily(){


const userId=1;


const API="http://localhost:3000/api/daily";


const [vip,setVip]=useState(0);

const [gold,setGold]=useState(0);

const [diamond,setDiamond]=useState(0);



async function loadUser(){


try{


const res=await fetch(

`${API}/${userId}`

);



const data=await res.json();



if(data.success){


setVip(data.vip);

setGold(data.gold);

setDiamond(data.diamond);


}



}catch(error){


console.log(error);


}


}







useEffect(()=>{


loadUser();


},[]);







return(


<div className="daily-page">


<h1>

🎁 Điểm Danh Hàng Ngày

</h1>



<div className="user-reward">


<p>

👑 VIP: {vip}

</p>


<p>

🪙 Gold: {gold}

</p>


<p>

💎 Diamond: {diamond}

</p>


</div>



<DailyReward

vip={vip}

userId={userId}

reload={loadUser}

/>



</div>


)



}

