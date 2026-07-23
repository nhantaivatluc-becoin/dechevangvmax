import {useState} from "react";
import "./GuildRole.css";


export default function GuildRole(){


const [members,setMembers]=useState(

JSON.parse(

localStorage.getItem("guildRoles")

)

||

[

{

name:"ADMIN",

role:"👑 Chủ Bang",

power:5000

},

{

name:"Chiến Binh",

role:"⚔️ Thành Viên",

power:2000

},

{

name:"Pháp Sư",

role:"⚔️ Thành Viên",

power:3000

}

]

);





function promote(index){


const list=[...members];


if(list[index].role==="⚔️ Thành Viên"){


list[index].role="🛡️ Phó Bang";


}

else if(list[index].role==="🛡️ Phó Bang"){


list[index].role="👑 Đồng Chủ Bang";


}



setMembers(list);


localStorage.setItem(

"guildRoles",

JSON.stringify(list)

);


}





function remove(index){


const list=members.filter(

(_,i)=>i!==index

);



setMembers(list);


localStorage.setItem(

"guildRoles",

JSON.stringify(list)

);


}





return(


<div className="role-page">


<div className="role-glass">



<h1>

👑 QUẢN LÝ BANG

</h1>




<div className="role-info">


<p>

🏰 Quyền Chủ Bang

</p>


<p>

🛡️ Điều hành thành viên

</p>


<p>

⚔️ Quản lý chiến tranh

</p>


</div>





{

members.map((m,i)=>(


<div

className="role-card"

key={i}

>



<h2>

🧍 {m.name}

</h2>



<p>

🎖️ {m.role}

</p>



<p>

⚔️ Sức mạnh:

{m.power}

</p>




{

i!==0 &&

<>


<button

onClick={()=>promote(i)}

>

⬆️ Thăng chức

</button>



<button

className="remove"

onClick={()=>remove(i)}

>

❌ Xóa thành viên

</button>


</>


}



</div>


))


}




</div>


</div>


)

}
