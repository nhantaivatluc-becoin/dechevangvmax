import React,{useEffect,useState} from "react";


export default function AdminWithdraw(){


const [list,setList]=useState([]);



async function load(){


const res=await fetch(

"http://localhost:3000/api/admin/withdraw",

{

headers:{

Authorization:
"Bearer "+
localStorage.getItem("adminToken")

}

}

);



const data=await res.json();


if(data.data){

setList(data.data);

}


}



useEffect(()=>{

load();

},[]);





async function approve(id){


await fetch(

"http://localhost:3000/api/admin/withdraw/approve",

{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:
"Bearer "+
localStorage.getItem("adminToken")

},


body:JSON.stringify({

withdrawId:id

})


}

);



load();


}




return (

<div>


<h2>
💸 DUYỆT RÚT TIỀN
</h2>



{

list.map(item=>(


<div

key={item.id}

style={{

border:"1px solid #ddd",

padding:"10px",

margin:"10px"

}}

>


User:
{item.userId}


<br/>


Diamond:
{item.amount}


<br/>


<button

onClick={()=>approve(item.id)}

>

Duyệt rút

</button>


</div>


))


}


</div>

)


}
