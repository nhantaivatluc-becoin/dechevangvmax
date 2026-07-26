import React,{useState} from "react";

import admin from "../data/admin";

import {
saveAdminLogin
}
from "../utils/authAdmin";


import "./AdminLogin.css";



export default function AdminLogin({setPage}){


const [user,setUser]=useState("");

const [pass,setPass]=useState("");

const [error,setError]=useState("");




function login(){


if(

user===admin.username &&

pass===admin.password

){


saveAdminLogin();


setPage("admin");


}

else{


setError(
"Sai tài khoản hoặc mật khẩu"
);


}



}




return(

<div className="admin-login">


<h1>

🔐 Admin Login

</h1>



<input

placeholder="Tài khoản"

value={user}

onChange={e=>setUser(e.target.value)}

/>




<input

type="password"

placeholder="Mật khẩu"

value={pass}

onChange={e=>setPass(e.target.value)}

/>




<button onClick={login}>

Đăng nhập

</button>



{

error &&

<p>

❌ {error}

</p>

}



</div>

)


}

