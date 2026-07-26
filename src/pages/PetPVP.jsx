import React,{useState} from "react";
import "./PetPVP.css";


export default function PetPVP(){



const pets=[

{
icon:"🐶",
name:"Shiba",
power:10
},

{
icon:"🐯",
name:"Hổ",
power:100
},

{
icon:"🦁",
name:"Sư tử",
power:180
},

{
icon:"🐋",
name:"Cá voi",
power:500
}


];



const [myPet,setMyPet]=useState(pets[0]);

const [enemy,setEnemy]=useState(null);

const [result,setResult]=useState("");





function findBattle(){


let random=

pets[

Math.floor(

Math.random()*pets.length

)

];



setEnemy(random);


setResult("⚔️ ĐANG CHIẾN ĐẤU...");




setTimeout(()=>{



if(myPet.power>=random.power){


setResult(

"🏆 BẠN THẮNG"

);


}

else{


setResult(

"💀 BẠN THUA"

);


}



},2000);



}







return(


<div className="pvp-page">


<h1>

⚔️ PVP THÚ CƯNG

</h1>



<div className="battle-box">





<div className="fighter">


<h2>

Bạn

</h2>


<div className="pet-fight">


{myPet.icon}

</div>



<h3>

{myPet.name}

</h3>


Power:

{myPet.power}



</div>







<div className="vs">

VS

</div>






<div className="fighter">


<h2>

Đối thủ

</h2>


<div className="pet-fight enemy">


{

enemy?

enemy.icon:

"❓"

}

</div>



<h3>

{

enemy?

enemy.name:

"?"

}

</h3>


Power:

{

enemy?

enemy.power:

"?"

}



</div>





</div>







<h2>

Chọn thú

</h2>



<div className="choose">


{

pets.map((p,i)=>(


<button

key={i}

onClick={()=>setMyPet(p)}

>

{p.icon}

{p.name}

</button>


))


}

</div>







<button

className="battle-btn"

onClick={findBattle}

>

⚔️ TÌM ĐỐI THỦ

</button>







<h2>

{result}

</h2>





</div>


)


}
