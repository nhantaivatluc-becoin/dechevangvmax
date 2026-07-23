import "./Pet.css";


import Header from "../components/Header";

import BottomMenu from "../components/BottomMenu";

import SideMenu from "../components/SideMenu";

import AssetHUD from "../components/AssetHUD";


import {
useGame
} from "../store/GameStore";



export default function Pet(){



const {

gold,

pet,

petBonus,

buyPet

}=useGame();






const pets=[


{
name:"🐶 Pet thường",
cost:0,
bonus:1
},


{
name:"🐱 Pet bạc",
cost:5000,
bonus:1.5
},


{
name:"🐯 Pet vàng",
cost:20000,
bonus:2
},


{
name:"🐉 Pet rồng",
cost:100000,
bonus:3
}



];






return(


<div className="pet-page">



<SideMenu/>


<Header/>


<AssetHUD/>





<h1>

🐾 PET ĐÀO VÀNG

</h1>





<div className="current-pet">


<h2>

{pet}

</h2>



<p>

⚡ Bonus:

x{petBonus}

</p>



<p>

🟡 Gold:

{Math.floor(gold).toLocaleString()}

</p>



</div>






<h2>

Mua Pet

</h2>







{

pets.map((item,index)=>(



<div

className="pet-card"

key={index}

>


<h3>

{item.name}

</h3>



<p>

⚡ Tăng đào:

x{item.bonus}

</p>



<p>

💰 Giá:

{item.cost.toLocaleString()}

Gold

</p>




<button

onClick={()=>buyPet(

item.name,

item.cost,

item.bonus

)}

>

MUA PET

</button>



</div>



))


}







<BottomMenu/>



</div>


)



}
