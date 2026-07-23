import "./Stock.css";
import {useState,useEffect} from "react";


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
name:"GOLDMAN SACHS",
code:"GS",
country:"🇺🇸 USA",
price:620.10,
change:1.20,
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
name:"ALIBABA",
code:"BABA",
country:"🇨🇳 China",
price:155.80,
change:2.80,
type:"Thương mại"
},

{
name:"FPT",
code:"FPT",
country:"🇻🇳 Vietnam",
price:135.5,
change:1.55,
type:"Công nghệ"
},

{
name:"VIETCOMBANK",
code:"VCB",
country:"🇻🇳 Vietnam",
price:72.8,
change:0.85,
type:"Ngân hàng"
}

];



export default function Stock(){


const [stocks,setStocks]=useState(markets);


useEffect(()=>{


const timer=setInterval(()=>{


setStocks(old=>

old.map(item=>{

const move=
(Number((Math.random()-0.5)*2))
.toFixed(2);


return{

...item,

price:
Number(
(item.price+Number(move))
.toFixed(2)
),

change:
Number(
(move*2)
.toFixed(2)
)

}


})


)


},3000);



return()=>clearInterval(timer);


},[]);



return(

<div className="stock-page">


<h1>
📈 DECHEVANG STOCK
</h1>


<div className="stock-wallet">

💰 Tài sản đầu tư

<strong>
50,000,000 VNĐ
</strong>

</div>



<input

className="stock-search"

placeholder="🔍 Tìm cổ phiếu, ngân hàng, công ty..."

/>



<div className="market-grid">


{

stocks.map((s,i)=>(


<div

className="stock-card"

key={i}

>


<div className="stock-title">

<h2>
{s.name}
</h2>


<span>
{s.code}
</span>


</div>



<p>
{s.country}
</p>


<p>
{s.type}
</p>



<div className="chart">


{

Array.from({length:12}).map((_,x)=>(

<div

key={x}

style={{

height:
30+
Math.random()*60

}}

></div>


))

}


</div>



<div

className={
s.change>=0
?
"up"
:
"down"
}


>

{s.change>=0?"▲":"▼"}

{s.change}%

</div>



<h3>

${s.price}

</h3>



<button>

MUA CỔ PHIẾU

</button>


</div>


))


}


</div>


</div>


)


}
