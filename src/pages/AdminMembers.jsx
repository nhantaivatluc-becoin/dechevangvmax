import React,{useEffect,useState} from "react";
import "./AdminMembers.css";


export default function AdminMembers(){


const [members,setMembers]=useState([]);

const [search,setSearch]=useState("");




function load(){


let users=

JSON.parse(

localStorage.getItem("members")||"[]"

);



setMembers(users);


}





useEffect(()=>{


load();


},[]);







function addDemo(){


let demo={

telegramId:"8454844333",

username:"Admin",

gold:100000,

diamond:10,

vnd:0,

vip:15,

energy:500,

pets:[]

};




let list=

JSON.parse(

localStorage.getItem("members")||"[]"

);



if(!list.find(x=>x.telegramId===demo.telegramId)){


list.push(demo);


}





localStorage.setItem(

"members",

JSON.stringify(list)

);



load();


}









function updateVip(id){


let vip=

prompt("Nhập VIP mới");



if(vip===null)
return;



let list=[...members];



list=list.map(u=>{


if(u.telegramId===id){


u.vip=Number(vip);


}


return u;


});



localStorage.setItem(

"members",

JSON.stringify(list)

);



setMembers(list);


}









function addGold(id){


let gold=

prompt("Số GOLD cộng thêm");



if(!gold)
return;



let list=[...members];



list=list.map(u=>{


if(u.telegramId===id){


u.gold=

Number(u.gold||0)+Number(gold);


}


return u;


});




localStorage.setItem(

"members",

JSON.stringify(list)

);



setMembers(list);


}









return(


<div className="admin-members">



<h1>

👥 QUẢN LÝ THÀNH VIÊN

</h1>





<button

onClick={addDemo}

>

➕ Tạo dữ liệu test

</button>







<input

placeholder="Tìm username / Telegram ID"

value={search}

onChange={e=>setSearch(e.target.value)}

/>







{

members

.filter(u=>

String(u.telegramId).includes(search)

||

String(u.username)

.toLowerCase()

.includes(search.toLowerCase())

)

.map((u,i)=>(



<div

className="member-card"

key={i}

>



<h3>

👤 {u.username}

</h3>



<p>

ID:

{u.telegramId}

</p>



<p>

🪙 Gold:

{u.gold}

</p>



<p>

💎 Diamond:

{u.diamond}

</p>



<p>

💵 VNĐ:

{u.vnd}

</p>



<p>

👑 VIP:

{u.vip}

</p>



<p>

⚡ Energy:

{u.energy}

</p>



<p>

🐾 Pet:

{u.pets?.length||0}

</p>







<button

onClick={()=>updateVip(u.telegramId)}

>

👑 Cấp VIP

</button>





<button

onClick={()=>addGold(u.telegramId)}

>

🪙 Cộng Gold

</button>




</div>



))


}





</div>


)


}
