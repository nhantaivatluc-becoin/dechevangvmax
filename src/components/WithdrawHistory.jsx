import "./WithdrawHistory.css";


export default function WithdrawHistory(){


const list = JSON.parse(

localStorage.getItem("withdrawHistory")

|| "[]"

);



return (

<div className="withdraw-history">


<h3>
📜 LỊCH SỬ RÚT TIỀN
</h3>



{

list.length === 0 ?


(

<p className="empty">

Chưa có giao dịch rút

</p>

)


:


(

list.map((item,index)=>(


<div

key={index}

className="withdraw-item"

>


<div>

💎 {item.diamond} Diamond

</div>


<div>

💵 {item.money} VNĐ

</div>


<div>

🏦 {item.bank}

</div>


<div>

📅 {item.time || item.date}

</div>


<div>

⏳ {item.status}

</div>



</div>


))


)


}



</div>

);


}
