import "./TransactionList.css";


import {

useTransaction

} from "../store/TransactionStore";



export default function TransactionList(){



const {

transactions

}=useTransaction();




return(


<div className="transaction-box">



<h2>

📜 GIAO DỊCH GẦN ĐÂY

</h2>





{

transactions.map((tx,index)=>(


<div

className="transaction-item"

key={index}

>


<p>

👤 {tx.user}

</p>


<p>

💰 {tx.amount.toLocaleString()} VNĐ

</p>



<p className="success">

✅ {tx.status}

</p>



<small>

{tx.time}

</small>



</div>


))


}




</div>


)



}
