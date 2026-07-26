import React,{useState} from "react";

import {
useNavigate
} from "react-router-dom";



export default function Fusion(){


const navigate=useNavigate();



const [slots]=useState([1,2,3,4]);



return(

<div className="fusion-page">



<h2>

🔥 GHÉP THÚ

</h2>




<p>

Chọn thú để ghép cấp cao hơn

</p>




<div className="fusion-grid">


{

slots.map((slot)=>(


<div

className="fusion-slot"

key={slot}

>


+

<br/>

Ô {slot}


</div>


))


}



</div>





<button

className="fusion-main"

>

🔥 GHÉP NGAY

</button>





<button

className="buy-fusion"

onClick={()=>navigate("/pet-shop")}

>

🛒 MUA THÊM THÚ

</button>





<div className="fusion-info">


⭐ Ghép thú tăng Level

<br/>

⚡ Tăng sức mạnh Pet

<br/>

💰 Chuẩn bị liên kết Gold/Diamond


</div>



</div>

)

}
