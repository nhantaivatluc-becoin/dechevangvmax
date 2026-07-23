import "./BankSelector.css";

import {
useState
} from "react";



export default function BankSelector({onChange}){


const [country,setCountry]=useState("Vietnam");

const [bank,setBank]=useState("");




const banks={


Vietnam:[

"Vietcombank",

"BIDV",

"Techcombank",

"MB Bank",

"ACB",

"VPBank",

"VietinBank"

],



USA:[

"Bank of America",

"Chase Bank",

"Wells Fargo",

"Citibank"

],



UK:[

"Barclays",

"HSBC",

"Standard Chartered"

],



International:[

"HSBC",

"Deutsche Bank",

"BNP Paribas",

"UBS"

]

};





const selectBank=(e)=>{


setBank(e.target.value);


if(onChange){

onChange({

country,

bank:e.target.value

});


}


};





return(


<div className="bank-selector">



<h3>
🌍 🏦 NGÂN HÀNG NHẬN TIỀN
</h3>




<select

value={country}

onChange={(e)=>{

setCountry(e.target.value);

setBank("");

}}

>


{Object.keys(banks).map((item)=>(


<option

key={item}

value={item}

>


{item}


</option>


))}


</select>





<select

value={bank}

onChange={selectBank}

>


<option value="">


Chọn ngân hàng


</option>



{banks[country].map((item)=>(


<option

key={item}

value={item}

>


{item}


</option>


))}



</select>



</div>


)

}
