import "./Bank.css";


import {
useState
} from "react";


import {
useWallet
} from "../context/WalletContext";





const banks=[


"Vietcombank",

"Techcombank",

"MB Bank",

"ACB",

"VPBank",

"HSBC",

"JPMorgan Chase",

"Bank of America",

"DBS Bank",

"Standard Chartered"

];







export default function Bank(){



const {

addVnd

}=useWallet();




const [amount,setAmount]=useState(0);



const [bank,setBank]=useState(

"Vietcombank"

);



const [history,setHistory]=useState([]);







function deposit(){



if(amount<=0)

return;



addVnd(amount);



setHistory([


{

bank,

amount,

time:new Date().toLocaleString()

},


...history


]);



alert(

"✅ Nạp "+

amount.toLocaleString()

+" VNĐ thành công"

);



setAmount(0);



}









return(


<div className="bank-page">





<h1>

🏦 NGÂN HÀNG DE CHE VANG

</h1>





<div className="bank-card">


<h2>

💳 Chọn ngân hàng

</h2>



<select


value={bank}


onChange={e=>

setBank(e.target.value)

}


>


{

banks.map((b,i)=>(


<option

key={i}

>

{b}

</option>


))


}


</select>




</div>








<div className="qr-card">


<h2>

📱 QR THANH TOÁN

</h2>



<div className="qr">


<img

src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=DE-CHE-VANG-NAP-TIEN"

alt="QR"

/>


</div>



<p>

Nội dung:

NAP TIEN DE CHE VANG

</p>



</div>









<div className="deposit-card">



<h2>

💵 Nạp tiền mặt

</h2>




<input


type="number"


placeholder="Nhập số tiền VNĐ"


value={amount}


onChange={e=>

setAmount(

Number(e.target.value)

)

}


/>





<button

onClick={deposit}

>

NẠP NGAY

</button>




</div>









<div className="history">


<h2>

🧾 Lịch sử giao dịch

</h2>




{

history.map((item,index)=>(



<div

key={index}

className="history-item"


>


<p>

🏦 {item.bank}

</p>


<p>

💰 {item.amount.toLocaleString()}đ

</p>


<small>

{item.time}

</small>



</div>


))


}




</div>







</div>


)


}
