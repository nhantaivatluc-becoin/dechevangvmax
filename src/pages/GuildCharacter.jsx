import {useState} from "react";
import "./GuildCharacter.css";


export default function GuildCharacter(){


const [characters,setCharacters]=useState([


{
name:"Bang Chủ",
icon:"👑",
level:10,
power:5000,
hp:10000,
def:3000
},


{
name:"Chiến Binh",
icon:"⚔️",
level:5,
power:3000,
hp:7000,
def:2000
},


{
name:"Pháp Sư",
icon:"🧙",
level:6,
power:4500,
hp:5000,
def:1500
},


{
name:"Cung Thủ",
icon:"🏹",
level:4,
power:2800,
hp:6000,
def:1800
},


{
name:"Hộ Vệ",
icon:"🛡",
level:7,
power:3500,
hp:9000,
def:5000
},


{
name:"Long Kỵ Sĩ",
icon:"🐉",
level:8,
power:6000,
hp:12000,
def:4000
}


]);



return(


<div className="character-page">


<h1>

⚔️ Nhân Vật Bang Hội

</h1>



<div className="character-list">


{

characters.map((c,index)=>(


<div className="character-card" key={index}>


<div className="char-icon">

{c.icon}

</div>



<h2>

{c.name}

</h2>



<p>

⭐ Cấp:

{c.level}

</p>



<p>

🔥 Sức mạnh:

{c.power}

</p>



<p>

❤️ HP:

{c.hp}

</p>



<p>

🛡 Phòng thủ:

{c.def}

</p>



<button>

⬆ Nâng cấp

</button>



</div>


))


}



</div>


</div>


)


}
