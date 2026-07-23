import {useState} from "react";
import "./GiftCode.css";


export default function GiftCode(){

const [code,setCode]=useState("");
const [msg,setMsg]=useState("");



async function receive(){


try{


const user =
window.Telegram?.WebApp?.initDataUnsafe?.user;



const res = await fetch(
"http://localhost:3000/api/gift/receive",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

telegramId:user?.id,

code

})
}
);



const data=await res.json();



if(data.success){

setMsg(
`🎉 Nhận ${data.gift.gold} Gold + ${data.gift.diamond} Diamond`
);


}else{

setMsg(data.error);

}


}

catch(err){

setMsg(
"❌ Không kết nối được server"
);

}


}



return(

<div className="gift-page">


<h1>
🎁 GIFT CODE
</h1>


<div className="gift-card">


<input

value={code}

placeholder="Nhập mã quà"

onChange={
e=>setCode(e.target.value)
}

/>


<button onClick={receive}>

🎁 NHẬN QUÀ

</button>


<div className="message">

{msg}

</div>


</div>


</div>

)

}