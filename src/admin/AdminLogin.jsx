import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


export default function AdminLogin(){


const navigate=useNavigate();


const [username,setUsername]=useState("");
const [password,setPassword]=useState("");



async function login(){


try{


const res=await fetch(
"http://localhost:3000/api/admin/auth/login",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

username,

password

})

}

);



const data=await res.json();



if(data.success){


localStorage.setItem(
"adminToken",
data.token
);



navigate("/admin");


}else{


alert(data.message);


}



}catch(e){

alert(e.message);

}


}




return (

<div>


<h2>
ADMIN LOGIN
</h2>


<input

placeholder="Username"

value={username}

onChange={
e=>setUsername(e.target.value)
}

/>


<br/>


<input

type="password"

placeholder="Password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>


<br/>


<button onClick={login}>

Đăng nhập

</button>


</div>

)


}
