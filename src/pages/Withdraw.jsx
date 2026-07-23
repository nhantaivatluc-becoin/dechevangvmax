import {useState} from "react";
import "./Withdraw.css";


export default function Withdraw(){



const [diamond,setDiamond]=useState("");

const [bank,setBank]=useState("");

const [account,setAccount]=useState("");

const [name,setName]=useState("");

const [qr,setQr]=useState("");




const banks=[

"Vietcombank",

"BIDV",

"VietinBank",

"Agribank",

"MB Bank",

"Techcombank",

"ACB",

"Sacombank",

"VPBank",

"TPBank",

"SHB",

"HDBank",

"VIB",

"SeABank",

"OCB",

"MSB"

];




function submit(){


const money=

Number(diamond)*250;


alert(

"Yêu cầu rút "+money+"đ đã gửi"

);


}




return(

<div className="withdraw-page">


<div className="withdraw-box">


<h1>

🏦 RÚT TIỀN QR

</h1>




<p>

💎 Nhập kim cương cần rút

</p>


<input

placeholder="Nhập số kim cương"

value={diamond}

onChange={e=>setDiamond(e.target.value)}

/>



<p>

Ngân hàng

</p>



<select

onChange={e=>setBank(e.target.value)}

>


<option>

Chọn ngân hàng

</option>


{

banks.map((b,i)=>(

<option key={i}>

{b}

</option>

))

}


</select>



<input

placeholder="Tên chủ tài khoản"

onChange={e=>setName(e.target.value)}

/>



<input

placeholder="Số tài khoản"

onChange={e=>setAccount(e.target.value)}

/>



<p>

QR ngân hàng

</p>


<input

type="file"

onChange={e=>setQr(e.target.files[0]?.name)}

 />



<button

onClick={submit}

>

💸 Gửi yêu cầu rút

</button>



</div>


</div>

)

}
