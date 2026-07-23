import {useState} from "react";
import "./PetEgg.css";


const eggs=[


{
name:"🥚 Trứng Thường",
price:1000,
type:"gold",
pets:[
{
name:"🐕 Chó Shiba",
type:"Thường",
power:120
},
{
name:"🐈 Mèo Anh",
type:"Thường",
power:150
}
]

},



{
name:"💎🥚 Trứng Hiếm",
price:50,
type:"diamond",
pets:[
{
name:"🦁 Sư Tử",
type:"Hiếm",
power:900
},
{
name:"🐯 Hổ Bengal",
type:"Hiếm",
power:1500
}
]

},



{
name:"👑🥚 Trứng Huyền Thoại",
price:500,
type:"diamond",
pets:[
{
name:"🐉 Rồng Vàng",
type:"Huyền Thoại",
power:10000
},
{
name:"🦄 Kỳ Lân",
type:"Huyền Thoại",
power:8000
}
]

}


];



export default function PetEgg(){


const [pets,setPets]=useState(

JSON.parse(

localStorage.getItem("pets")

)||[]

);



const [open,setOpen]=useState("");



function hatch(egg){


const random=

egg.pets[

Math.floor(

Math.random()*egg.pets.length

)

];



const newPet={


...random,


id:Date.now(),

level:1,

exp:0,

active:false


};



setPets([

...pets,

newPet

]);



localStorage.setItem(

"pets",

JSON.stringify(

[...pets,newPet]

)

);



setOpen(

"🎉 Bạn nhận được "+random.name

);



}



return(


<div className="egg-page">


<h1>

🥚 MỞ TRỨNG PET

</h1>



<div className="egg-grid">


{

eggs.map((egg,i)=>(


<div

className="egg-card"

key={i}

>


<h2>

{egg.name}

</h2>


<p>

🎯 Random Pet

</p>


<button

onClick={()=>hatch(egg)}

>

MỞ TRỨNG

</button>



</div>


))


}


</div>



<h2 className="result">

{open}

</h2>



</div>


)

}
