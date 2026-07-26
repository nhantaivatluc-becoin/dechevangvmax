import React,{useState} from "react";
import "./AppPages.css";


export default function Withdraw(){


const [amount,setAmount]=useState("");



return(


<div className="stock-page">



<h1>

💸 RÚT TIỀN

</h1>





<div className="detail-card">


<h2>

Rút Diamond về ngân hàng

</h2>



<p>

Tỷ lệ quy đổi:

</p>



<strong>

1 Diamond = 2.5 VNĐ

</strong>




</div>







<div className="buy-box">


<label>

Số tiền muốn rút

</label>



<input


type="number"


placeholder="Nhập số tiền"


value={amount}


onChange={
e=>setAmount(e.target.value)
}


/>







<input

placeholder="Tên chủ tài khoản"

/>





<input

placeholder="Số tài khoản ngân hàng"

/>






<input

placeholder="Tên ngân hàng"

/>








<button>

💰 GỬI YÊU CẦU RÚT TIỀN

</button>




</div>






</div>


)


}

