import React from "react";


const shopPets=[


{
icon:"🐶",
name:"Chó Vàng",
price:"100.000 Gold",
rarity:"Thường"
},


{
icon:"🐱",
name:"Mèo May Mắn",
price:"300.000 Gold",
rarity:"Hiếm"
},


{
icon:"🐯",
name:"Hổ Vàng",
price:"1.000.000 Gold",
rarity:"VIP"
},


{
icon:"🐲",
name:"Rồng Vàng",
price:"5.000.000 Gold",
rarity:"Huyền Thoại"
},


{
icon:"🦅",
name:"Đại Bàng",
price:"2.000.000 Gold",
rarity:"Cao Cấp"
},


{
icon:"🦁",
name:"Sư Tử Vàng",
price:"3.000.000 Gold",
rarity:"Siêu Cấp"
}


];



export default function PetShop(){


return(

<div className="pet-page">


<h2>

🛒 SHOP THÚ

</h2>




<div className="pet-grid">


{

shopPets.map((pet,index)=>(


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

⭐ {pet.rarity}

</p>



<p>

💰 {pet.price}

</p>




<button>

MUA THÚ

</button>



</div>


))


}



</div>



</div>

)

}
