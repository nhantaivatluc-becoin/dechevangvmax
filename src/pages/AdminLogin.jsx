import React,{useState} from "react";

import {useNavigate} from "react-router-dom";

import "./AdminLogin.css";


export default function AdminLogin(){


const nav=useNavigate();


const [pass,setPass]=useState("");

const [error,setError]=useState("");




function login(){


if(pass==="11122003"){


localStorage.setItem(

"admin",

"true"

);


nav("/admin-vip");



}else{


setError(

"Sai mật khẩu"

);


}



}




return(


<div className="admin-login">


<div className="admin-box">


<h1>

🔐 ADMIN

</h1>



<input

type="password"

placeholder="Mật khẩu"

value={pass}

onChange={e=>setPass(e.target.value)}

/>




<button

onClick={login}

>

Đăng nhập

</button>




<p>

{error}

</p>


</div>



</div>



)


}

