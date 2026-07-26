import React,{useEffect,useState} from "react";


export default function AdminUsers(){


const [users,setUsers]=useState([]);



useEffect(()=>{


fetch(

"http://localhost:3000/api/admin/users",

{

headers:{

Authorization:
"Bearer "+
localStorage.getItem("adminToken")

}

}

)

.then(r=>r.json())

.then(x=>{

if(x.data)
setUsers(x.data);

});


},[]);



return (

<div>


<h2>
👥 USER
</h2>



{

users.map(user=>(


<div key={user.id}

style={{

border:"1px solid #ccc",

padding:"10px",

margin:"5px"

}}

>


ID:
{user.id}


<br/>


VIP:
{user.vip}


<br/>


Gold:
{String(user.gold)}


<br/>


Diamond:
{user.diamond}



</div>


))


}


</div>

)


}
