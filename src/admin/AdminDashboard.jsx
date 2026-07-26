import React,{useEffect,useState} from "react";


export default function AdminDashboard(){


const [data,setData]=useState({});


useEffect(()=>{


fetch(

"http://localhost:3000/api/admin/dashboard",

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
setData(x.data);

});


},[]);



return (

<div>


<h2>
📊 Dashboard
</h2>


<h3>
👥 Người chơi:
{data.users || 0}
</h3>


<h3>
💰 Nạp VIP chờ:
{data.deposit || 0}
</h3>


<h3>
💸 Rút tiền chờ:
{data.withdraw || 0}
</h3>


</div>

)


}
