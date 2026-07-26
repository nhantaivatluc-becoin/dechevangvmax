import React,{useState,useEffect} from "react";
import "./Withdraw.css";


export default function Withdraw(){



const [user,setUser]=useState({});


const [diamond,setDiamond]=useState("");

const [bank,setBank]=useState("BIDV");

const [account,setAccount]=useState("");

const [name,setName]=useState("");

const [message,setMessage]=useState("");





useEffect(()=>{


let data=
JSON.parse(
localStorage.getItem("user")||"{}"
);


setUser(data);


},[]);








function withdraw(){



let amount=
Number(diamond);





if(amount<=0){


setMessage(
"❌ Nhập số Diamond cần rút"
);


return;


}




let data=
JSON.parse(
localStorage.getItem("user")||"{}"
);





if(Number(data.diamond||0)<amount){


setMessage(
"❌ Không đủ Diamond"
);


return;


}







let vnd=


amount*2;






data.diamond=
Number(data.diamond||0)
-
amount;






data.withdrawRequest={


diamond:amount,


vnd:vnd,


bank:bank,


account:account,


name:name,


status:"WAITING",


time:new Date().toLocaleString()


};






localStorage.setItem(
"user",
JSON.stringify(data)
);




setUser(data);



setMessage(
"✅ Đã gửi yêu cầu rút tiền"
);




}









return(


<div className="withdraw-page">





<h1>

💎 RÚT TIỀN

</h1>





<div className="withdraw-card">



<h2>

💰 Quy đổi

</h2>




<p>

🪙 1.800.000 Gold

</p>



<p>

💎 = 0.01 Diamond

</p>




<p>

💵 0.01 Diamond

</p>



<p className="money">

= 0.020 VNĐ

</p>




</div>









<div className="withdraw-card">



<h2>

🏦 THÔNG TIN NHẬN TIỀN

</h2>





<select

value={bank}

onChange={
e=>setBank(e.target.value)
}

>


<option>

BIDV

</option>


<option>

Vietcombank

</option>


<option>

Techcombank

</option>


<option>

MB Bank

</option>


<option>

VPBank

</option>


</select>






<input

placeholder="Tên chủ tài khoản"

value={name}

onChange={
e=>setName(e.target.value)
}

/>





<input

placeholder="Số tài khoản"

value={account}

onChange={
e=>setAccount(e.target.value)
}

/>



</div>









<div className="withdraw-card">



<h2>

💎 Số Diamond rút

</h2>




<input

type="number"

placeholder="Nhập Diamond"

value={diamond}

onChange={
e=>setDiamond(e.target.value)
}

/>





<button

onClick={withdraw}

>

🚀 GỬI YÊU CẦU RÚT

</button>



</div>







<h3>

{message}

</h3>







</div>


)



}
