import React,{useState} from "react";
import "../apps/AppPages.css";


export default function AdminLogin(){


const [pass,setPass]=useState("");



return(

<div className="stock-page">


<h1>

🔐 ADMIN LOGIN

</h1>



<div className="buy-box">


<input

type="password"

placeholder="Mật khẩu Admin"

value={pass}

onChange={
e=>setPass(e.target.value)
}

/>



<button>

ĐĂNG NHẬP

</button>


</div>



</div>

)

}

