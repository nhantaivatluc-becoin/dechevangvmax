import {useState} from "react";
import "./PetInventory.css";


export default function PetInventory(){


const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond"))||0

);



const [pets,setPets]=useState(

JSON.parse(localStorage.getItem("pets"))||[]

);



const petList=[


{
name:"🐕 Shiba Inu",
rarity:"common",
price:2,
power:100
},


{
name:"🐕 Husky Siberia",
rarity:"common",
price:3,
power:150
},


{
name:"🐈 Mèo Anh Lông Ngắn",
rarity:"common",
price:2,
power:120
},


{
name:"🐈 Mèo Ba Tư",
rarity:"common",
price:3,
power:130
},


{
name:"🐰 Thỏ Mini Lop",
rarity:"common",
price:2,
power:90
},


{
name:"🦜 Vẹt Macaw",
rarity:"rare",
price:5,
power:300
},


{
name:"🐺 Sói Xám",
rarity:"rare",
price:10,
power:600
},


{
name:"🦊 Cáo Bắc Cực",
rarity:"rare",
price:12,
power:700
},


{
name:"🦅 Đại Bàng Vàng",
rarity:"rare",
price:20,
power:1200
},


{
name:"🐆 Báo Tuyết",
rarity:"rare",
price:30,
power:2000
},


{
name:"🐯 Hổ Bengal",
rarity:"rare",
price:40,
power:2500
},


{
name:"🦁 Sư Tử Châu Phi",
rarity:"rare",
price:50,
power:3000
}


];




function unlock(p){



let exist=pets.find(

x=>x.name===p.name

);



if(exist){

alert("Pet đã sở hữu");

return;

}



if(diamond<p.price){

alert("❌ Không đủ kim cương");

return;

}



let newDiamond=

diamond-p.price;



let pet={


name:p.name,

icon:p.name.substring(0,2),

rarity:p.rarity,

level:1,

star:1,

exp:0,

power:p.power,

locked:false

};



let list=[...pets,pet];



setDiamond(newDiamond);

setPets(list);



localStorage.setItem(

"diamond",

newDiamond

);



localStorage.setItem(

"pets",

JSON.stringify(list)

);



alert(

"🎉 Đã mở khóa "+p.name

);


}





return(

<div className="inventory-page">


<h1>

🐾 KHO PET

</h1>



<h2>

💎 Kim Cương: {diamond}

</h2>



<div className="inventory-grid">


{

petList.map((p,i)=>{


let owned=pets.find(

x=>x.name===p.name

);



return(


<div

key={i}

className={

"pet-card "+p.rarity

}

>


<h2>

{p.name}

</h2>



<p>

⚔️ Sức mạnh:

{p.power}

</p>



<p>

Độ hiếm:

{p.rarity}

</p>



{

owned

?

<h3>

✅ Đã mở khóa

</h3>


:

<button

onClick={()=>unlock(p)}

>

🔓 Mở khóa 💎 {p.price}

</button>

}



</div>


)


})


}


</div>


</div>

)

}
