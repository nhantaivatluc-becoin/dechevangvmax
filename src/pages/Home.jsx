import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import "./Home.css";


export default function Home(){


const [user,setUser]=useState({});


const [floating,setFloating]=useState([]);


function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);


setUser(data);


}




useEffect(()=>{


load();



let timer=setInterval(()=>{


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



data.gold=

Number(data.gold||0)+0.5;



localStorage.setItem(

"user",

JSON.stringify(data)

);



window.dispatchEvent(

new Event("financeUpdate")

);



},60000);





return()=>clearInterval(timer);



},[]);







function mineEffect(){



let id=Date.now();



setFloating(x=>[

...x,

{

id,

text:"+0.50 🪙"

}

]);






setTimeout(()=>{


setFloating(x=>

x.filter(

a=>a.id!==id

)

);


},1500);






let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



data.gold=

Number(data.gold||0)+0.5;



localStorage.setItem(

"user",

JSON.stringify(data)

);



window.dispatchEvent(

new Event("financeUpdate")

);


load();



}





return(



<div className="home-page">






{

floating.map(f=>(


<div

className="gold-fly"

key={f.id}

>

{f.text}

</div>


))

}







<div className="welcome-box">


👋 Xin chào


<h2>

{user.username||"Người chơi"}

</h2>



<p>

ID:

{user.telegramId||"Chưa kết nối"}

</p>


</div>









<div className="home-assets">



<div>

🪙 GOLD

<h2>

{Number(user.gold||0).toFixed(2)}

</h2>

</div>




<div>

👑 VIP

<h2>

{user.vip||0}

</h2>

</div>



</div>









<div className="mine-box">



<div className="mine-machine">


⛏️

</div>




<h2>

MÁY ĐÀO VÀNG

</h2>



<p>

Auto Mining

<br/>

+0.50 GOLD / phút

</p>






<button

onClick={mineEffect}

>

⛏️ ĐÀO NGAY

</button>



</div>









<div className="pet-show">


<h2>

🐾 Thú của bạn

</h2>



{

user.pets?.length?

user.pets.map((p,i)=>(

<div

className="pet-item"

key={i}

>

{p.icon}

{p.name}

Lv.{p.level}

</div>


))

:

<p>

Chưa có thú

</p>

}



</div>









<div className="home-buttons">



<Link to="/mining">

⛏️ Mining

</Link>



<Link to="/shop">

🛒 Shop

</Link>



<Link to="/pet-pvp">

⚔️ PVP

</Link>



</div>





</div>


)


}
