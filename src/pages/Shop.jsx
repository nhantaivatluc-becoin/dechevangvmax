import "./Shop.css";

import {useState} from "react";


export default function Shop(){


const [gold,setGold]=useState(5000);

const [message,setMessage]=useState("");



const pets=[


{
name:"🐺 Sói Bóng Đêm",
price:1000,
power:50
},


{
name:"🐯 Hổ Vàng",
price:3000,
power:150
},


{
name:"🐉 Rồng VIP",
price:10000,
power:500
}


];





function buy(pet){


if(gold < pet.price){


setMessage(
"❌ Không đủ Gold"
);


return;


}



setGold(
gold-pet.price
);



setMessage(
"✅ Đã mua "+pet.name
);



}





return(


<div className="shop">



<h1>

🏪 CỬA HÀNG ĐẾ CHẾ

</h1>



<div className="gold">

🟡 Gold:

<b>

{gold}

</b>

</div>




<h2>

🐾 Pet Shop

</h2>




<div className="shop-list">



{

pets.map((pet,index)=>(


<div
className="item"
key={index}
>


<div className="pet-icon">

{pet.name.split(" ")[0]}

</div>



<h3>

{pet.name}

</h3>



<p>

⚔️ Power:

<b>

{pet.power}

</b>

</p>



<p>

💰 Giá:

<b>

{pet.price}

</b>

Gold

</p>



<button
onClick={()=>buy(pet)}
>

MUA

</button>



</div>


))

}



</div>





<h2>

⭐ VIP SHOP

</h2>



<div className="vip-box">


<p>
VIP 1 ⭐
</p>

<p>
+10% tốc độ đào vàng
</p>


<button>

Nâng VIP

</button>


</div>




<h3>

{message}

</h3>



</div>


)

}
