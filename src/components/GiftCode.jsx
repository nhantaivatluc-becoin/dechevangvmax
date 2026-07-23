import {useState} from "react";


export default function GiftCode(){


const [code,setCode]=useState("");


function submit(){

alert(
"Đã gửi mã: "+code
);

}


return (

<div className="card">


<h2>
🎁 Gift Code
</h2>


<input

placeholder="Nhập mã quà tặng"

value={code}

onChange={(e)=>setCode(e.target.value)}

/>


<button onClick={submit}>

NHẬN QUÀ

</button>


</div>

)


}
