import React,{useState} from "react";
import "./Farm.css";


export default function Farm(){


const [pets,setPets]=useState([

{
id:1,
name:"🐶 Cún Vàng",
level:1,
buff:5
},

{
id:2,
name:"🐲 Rồng Vàng",
level:1,
buff:10
},

{
id:3,
name:"🦊 Cáo Hoàng Kim",
level:1,
buff:15
}


]);



function upgrade(id){


setPets(

pets.map(p=>{


if(p.id===id){


return{

...p,

level:p.level+1,

buff:p.buff+5

}


}


return p;


})

);


}




return(


<div className="farm-page">



<h1>

🌾 PET FARM

</h1>



<div className="farm-banner">


🐾

<br/>

Trang trại thú cưng Đế Chế Vàng

<p>

Pet hỗ trợ khai thác Gold

</p>


</div>







<div className="pet-list">


{

pets.map(p=>(


<div

className="pet-card"

key={p.id}

>


<div className="pet-icon">

{p.name}

</div>


<h3>

Level {p.level}

</h3>



<p>

⛏ Buff đào vàng:

<br/>

<b>

+{p.buff}%

</b>

</p>




<button

onClick={()=>upgrade(p.id)}

>

🆙 NÂNG CẤP

</button>


</div>


))


}



</div>







<div className="food-box">


<h2>

🍖 Thức ăn Pet

</h2>


<p>

Tăng EXP và sức mạnh Pet

</p>


<button>

MUA THỨC ĂN

</button>


</div>






</div>


)


}
