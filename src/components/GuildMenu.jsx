import {useState} from "react";
import "./GuildMenu.css";


export default function GuildMenu({openPage}){


const [show,setShow]=useState(false);



const list=[


["🛡️ Phòng Thủ","GuildDefense"],

["👑 Quản Lý Bang","GuildRole"],

["📜 Nhiệm Vụ Bang","GuildQuest"],

["🏦 Kho Bang","GuildWarehouse"],

["🛒 Shop Bang","GuildShop"],

["🐉 Boss Thế Giới","WorldBoss"],

["🌐 Liên Server","GuildWarServer"],

["🏆 BXH Mùa Giải","GuildRanking"]


];



return(

<>


<button

className="menu-btn"

onClick={()=>setShow(!show)}

>

☰

</button>



<div

className={show?"menu show":"menu"}

>


<h1>

🏰 BANG HỘI

</h1>



{

list.map((x,i)=>(


<button

key={i}

onClick={()=>{

openPage(x[1]);

setShow(false);

}}

>

{x[0]}

</button>


))


}


</div>



</>

)

}
