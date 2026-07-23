import "./Deposit.css";


export default function Deposit(){


return(

<div className="deposit">


<h1>
💰 NẠP TIỀN
</h1>


<p>
Chuyển khoản tới tài khoản Admin để mua VIP
</p>



<div className="bank">


🏦 NGÂN HÀNG: <b>BIDV</b>


<br/><br/>


💳 SỐ TÀI KHOẢN:

<br/>

<b>8830541999</b>


<br/><br/>


👤 CHỦ TÀI KHOẢN:

<br/>

<b>NGUYEN NGOC ANH</b>


<br/><br/>


📝 Nội dung chuyển khoản:

<br/>

<b>
Telegram ID + Mua VIP
</b>


</div>



<button

onClick={()=>alert("Đã gửi yêu cầu kiểm tra nạp tiền")}

>

✅ TÔI ĐÃ CHUYỂN KHOẢN

</button>


</div>

)

}
