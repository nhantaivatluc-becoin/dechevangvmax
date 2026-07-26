import React,{useEffect,useState} from "react";
import "./Vip.css";


const vipList=[

{level:1,price:50000,bonus:5},
{level:2,price:100000,bonus:10},
{level:3,price:200000,bonus:15},
{level:4,price:500000,bonus:25},
{level:5,price:1000000,bonus:40},
{level:6,price:2000000,bonus:60},
{level:7,price:5000000,bonus:80},
{level:8,price:10000000,bonus:100},
{level:9,price:20000000,bonus:150},
{level:10,price:50000000,bonus:200},
{level:11,price:100000000,bonus:300},
{level:12,price:200000000,bonus:400},
{level:13,price:500000000,bonus:600},
{level:14,price:1000000000,bonus:800},
{level:15,price:2000000000,bonus:1000}

];





export default function Vip(){



const [user,setUser]=useState({});





function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setUser(data);


}




useEffect(()=>{


load();


},[]);







function buyVip(v){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);






let orders=

JSON.parse(

localStorage.getItem("vipOrders")||"[]"

);





orders.push({


id:Date.now(),


telegramId:data.telegramId,


username:data.username,


vip:v.level,


amount:v.price,


status:"pending",


time:new Date().toLocaleString()


});






localStorage.setItem(

"vipOrders",

JSON.stringify(orders)

);






alert(

"Đã tạo đơn mua VIP. Chờ Admin duyệt"

);



}








return(


<div className="vip-page">





<h1>

👑 VIP CENTER

</h1>





<div className="current-vip">


VIP hiện tại:

<b>

VIP {user.vip||0}

</b>


</div>








<div className="vip-grid">


{

vipList.map((v,i)=>(


<div

className="vip-card"

key={i}

>


<div className="vip-icon">

👑

</div>




<h2>

VIP {v.level}

</h2>




<p>

⚡ Mining +{v.bonus}%

</p>




<h3>

{v.price.toLocaleString()}

VNĐ

</h3>




<button

onClick={()=>buyVip(v)}

>

MUA VIP

</button>




</div>



))

}



</div>





</div>



)


}
