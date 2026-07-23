import "./WithdrawNotice.css";


export default function WithdrawNotice(){


return (

<div className="withdraw-notice">


<h3>
⚠️ QUY ĐỊNH RÚT TIỀN
</h3>


<div className="rule-item">

💎 Tối thiểu rút:
<br/>

<b>100 Diamond</b>

</div>



<div className="rule-item">

🔄 Số lần rút tối đa:
<br/>

<b>3 lần</b>

</div>



<div className="bank-box">

🏦 KIỂM TRA THÔNG TIN

<br/><br/>

✔ Số tài khoản ngân hàng

<br/>

✔ Tên chủ tài khoản

<br/>

✔ Ngân hàng nhận tiền

</div>




<div className="danger-box">

🚨 CẢNH BÁO

<br/><br/>

Nhập sai số tài khoản

<br/>

sẽ không được hoàn về game.

<br/><br/>

❌ Giao dịch đã xử lý

<br/>

không thể hoàn trả.

</div>



</div>

)


}
