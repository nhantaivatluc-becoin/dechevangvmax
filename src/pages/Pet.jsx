import React from "react";

import {
useNavigate
} from "react-router-dom";


const pets=[


{
icon:"🐶",
name:"Chó Vàng",
level:5,
power:"+5% Mining"
},


{
icon:"🐱",
name:"Mèo May Mắn",
level:8,
power:"+10% Luck"
},


{
icon:"🐯",
name:"Hổ Vàng",
level:12,
power:"+20% Power"
},


{
icon:"🐲",
name:"Rồng Vàng",
level:20,
power:"+50% Mining"
},


{
icon:"🦅",
name:"Đại Bàng",
level:15,
power:"+25% Speed"
}


];



export default function Pet(){


const navigate=useNavigate();



return(

<div className="pet-page">



<h2>

🐾 PET CENTER

</h2>




<div className="pet-follow">


<h3>

🐲 Pet đang theo

</h3>


<div className="follow-pet">

🐲

</div>



<h3>

Rồng Vàng

</h3>



<p>

⭐ Level 20

</p>


<p>

⚡ +50% Mining

</p>


</div>





<div className="pet-status">


❤️ Sức khỏe

<div className="bar">

<div></div>

</div>



⚡ Năng lượng

<div className="bar energy">

<div></div>

</div>


</div>







<h3>

📦 Kho thú

</h3>




<div className="pet-grid">


{

pets.map((pet,index)=>(


<div

className="pet-card"

key={index}

>


<div className="pet-icon">

{pet.icon}

</div>



<h3>

{pet.name}

</h3>



<p>

⭐ Level {pet.level}

</p>



<p>

{pet.power}

</p>




<button>

Trang bị

</button>



</div>


))


}


</div>





<div className="pet-action">


<button

onClick={()=>navigate("/pet-shop")}

>

🛒 Mua thêm thú

</button>



<button

onClick={()=>navigate("/fusion")}

>

🔥 Ghép thú

</button>


</div>




</div>

)

}
