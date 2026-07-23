import "./Stock.css";

import {
useState,
useEffect
} from "react";


import {
useNavigate
} from "react-router-dom";



const markets=[


{
name:"NVIDIA",
code:"NVDA",
country:"🇺🇸 USA",
price:180.25,
change:3.25,
type:"Công nghệ"
},


{
name:"APPLE",
code:"AAPL",
country:"🇺🇸 USA",
price:215.50,
change:1.85,
type:"Công nghệ"
},


{
name:"MICROSOFT",
code:"MSFT",
country:"🇺🇸 USA",
price:510.20,
change:-0.65,
type:"Công nghệ"
},


{
name:"JPMORGAN CHASE",
code:"JPM",
country:"🇺🇸 USA",
price:295.30,
change:2.45,
type:"Ngân hàng"
},


{
name:"HSBC",
code:"HSBC",
country:"🇬🇧 UK",
price:92.40,
change:-0.35,
type:"Ngân hàng"
},


{
name:"TOYOTA",
code:"TM",
country:"🇯🇵 Japan",
price:245.60,
change:1.10,
type:"Ô tô"
},


{
name:"FPT",
code:"FPT",
country:"🇻🇳 Vietnam",
price:135.5,
change:1.55,
type:"Công nghệ"
}


];





export default function Stock(){


const navigate=useNavigate();


const [stocks,setStocks]=useState(markets);



useEffect(()=>{


const timer=setInterval(()=>{


setStocks(old=>

old.map(s=>{


const move=

Number(

((Math.random()-0.5)*2)

.toFixed(2)

);



return{

...s,

price:

Number(

(s.price+move)

.toFixed(2)

),


change:

move

};


})

);



},3000);



return()=>clearInterval(timer);


},[]);





return(


<div className="stock-page">


<h1>

📈 DECHEVANG STOCK

</h1>




<input

className="stock-search"

placeholder="🔍 Tìm ngân hàng, công ty..."

 />





<div className="market-grid">


{

stocks.map((s,i)=>(


<div

className="stock-card"

key={i}

onClick={()=>


navigate(

"/market-detail",

{

state:s

}

)


}


>



<h2>

{s.name}

</h2>


<strong>

{s.code}

</strong>



<p>

{s.country}

</p>



<p>

{s.type}

</p>




<div className="up">


{s.change>=0?"▲":"▼"}

{s.change}%

</div>




<h3>

${s.price}

</h3>



<button>

XEM CHI TIẾT

</button>



</div>


))


}



</div>


</div>


)


}
