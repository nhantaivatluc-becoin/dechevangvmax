import "./Wallet.css";

import {useState} from "react";

import {useGame} from "../store/GameStore";

import BankSelector from "../components/BankSelector";
import QRUpload from "../components/QRUpload";
import WithdrawHistory from "../components/WithdrawHistory";
import WithdrawRule from "../components/WithdrawRule";
import WithdrawNotice from "../components/WithdrawNotice";


export default function Wallet(){


const {

gold,

diamond,

cashValue,

setDiamond

}=useGame();



const [bankInfo,setBankInfo]=useState({});

const [qr,setQr]=useState(null);

const [account,setAccount]=useState("");

const [owner,setOwner]=useState("");

const [amount,setAmount]=useState("");

const [loading,setLoading]=useState(false);



const money = Number(amount || 0) * 250;




const withdraw = async()=>{


const value=Number(amount);



if(!bankInfo.bank){

alert("🏦 Vui lòng chọn ngân hàng");

return;

}



if(value < 100){

alert("⚠️ Tối thiểu rút 100 Diamond");

return;

}



if(value > Number(diamond)){

alert("❌ Diamond không đủ");

return;

}



if(!qr && (!account || !owner)){


alert(
"📷 Tải QR hoặc nhập STK + họ tên"
);


return;

}



try{


setLoading(true);



const res=await fetch(

"http://localhost:3000/api/withdraw",

{


method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({


userId:1,

diamond:value,

bank:bankInfo.bank,

account,

owner,

qrImage:qr


})


}

);



const data=await res.json();



if(!res.ok){

alert(data.message);

return;

}



setDiamond(

Number(diamond)-value

);



setAmount("");

setAccount("");

setOwner("");



alert(
"✅ Gửi yêu cầu rút thành công"
);



}

catch(err){

console.log(err);

alert(
"❌ Lỗi kết nối server"
);

}


finally{

setLoading(false);

}


};




return(


<div className="wallet-page">


<h1>
💎 VÍ CỦA BẠN
</h1>



<div className="wallet-assets">


<div>

🟡 GOLD

<strong>

{Number(gold).toLocaleString()}

</strong>

</div>



<div>

💎 DIAMOND

<strong>

{Number(diamond).toFixed(6)}

</strong>

</div>



<div>

💵 VNĐ

<strong>

{Number(cashValue).toLocaleString()} đ

</strong>

</div>


</div>





<div className="bank-card">


<h2>

🏦 NGÂN HÀNG NHẬN TIỀN

</h2>


<BankSelector

onChange={setBankInfo}

/>


{

!bankInfo.bank &&

<p className="warning">

⚠️ Bắt buộc chọn ngân hàng

</p>

}


</div>





<QRUpload

onChange={setQr}

/>






<div className="bank-info-card">


<h2>

💳 THÔNG TIN TÀI KHOẢN

</h2>




<input

placeholder="Số tài khoản ngân hàng"

value={account}

onChange={e=>

setAccount(e.target.value)

}

/>




<input

placeholder="Họ tên viết liền không dấu"

value={owner}

onChange={e=>

setOwner(

e.target.value

.replace(/[^a-zA-Z]/g,"")

.toUpperCase()

)

}

/>




<p>

Ví dụ: NGUYENVANA

</p>


</div>






<div className="diamond-box">


<h2>

💎 NHẬP DIAMOND RÚT

</h2>



<input

type="number"

placeholder="Tối thiểu 100 Diamond"

value={amount}

onChange={e=>

setAmount(e.target.value)

}

/>




<div className="money-preview">


💎 Diamond:

<b>

{Number(amount||0).toFixed(2)}

</b>



<br/>


💵 Nhận:

<b>

{money.toLocaleString()} VNĐ

</b>


</div>



<button

disabled={loading || !bankInfo.bank}

onClick={withdraw}

>


{

loading ?

"⏳ ĐANG GỬI"

:

"💰 RÚT TIỀN"

}



</button>



</div>





<WithdrawRule/>

<WithdrawNotice/>

<WithdrawHistory/>




</div>


)


}
