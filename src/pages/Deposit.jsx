import React,{useState} from "react";
import "./Deposit.css";


export default function Deposit(){


const [money,setMoney]=useState("");

const [image,setImage]=useState(null);

const [msg,setMsg]=useState("");





function createDeposit(){


let amount=Number(money);


if(amount<=0){

setMsg("❌ Nhập số tiền đầu tư");

return;

}





let user=
JSON.parse(
localStorage.getItem("user")||"{}"
);





user.pendingInvestment={


type:"GLOBAL INVESTMENT",


country:"WORLD",


capital:amount,


vip:user.vip||0,


time:new Date().toLocaleString(),


image:image


};






localStorage.setItem(

"user",

JSON.stringify(user)

);





setMsg(
"✅ Đã gửi yêu cầu đầu tư chờ duyệt"
);



}






function copyText(){


navigator.clipboard.writeText(

"DAU TU DE CHE VANG VMAX"

);


setMsg(
"📋 Đã copy nội dung"
);


}







return(



<div className="deposit-page">






<h1>

💰 NẠP TIỀN ĐẦU TƯ

</h1>









<div className="bank-card">



<h2>

🏦 THÔNG TIN NGÂN HÀNG

</h2>




<div className="bank-box">


<p>
👤 NGUYEN NGOC ANH
</p>


<p>
🏦 BIDV
</p>


<p>
💳 STK:
<b>
8830541999
</b>
</p>


<p>
📍 PGD NGHI SON - THANH HÓA
</p>



</div>



</div>










<div className="content-card">


<h2>

📌 NỘI DUNG CHUYỂN KHOẢN

</h2>



<div className="code">


DAU TU DE CHE VANG VMAX


</div>



<button

onClick={copyText}

>

📋 COPY

</button>




</div>









<div className="content-card">


<h2>

💵 SỐ TIỀN ĐẦU TƯ

</h2>



<input

type="number"

placeholder="Nhập số tiền VNĐ"

value={money}

onChange={
e=>setMoney(e.target.value)
}

/>




<p>


Bạn đầu tư:

<b>

{
Number(money||0)
.toLocaleString()

}

 VNĐ


</b>


</p>




</div>










<div className="content-card">


<h2>

📷 BIÊN LAI

</h2>



<input

type="file"

onChange={
e=>

setImage(
e.target.files[0]?.name
)

}

/>


</div>









<button

className="deposit-btn"

onClick={createDeposit}

>


🚀 GỬI YÊU CẦU ĐẦU TƯ


</button>





<h3>

{msg}

</h3>




</div>


)


}
