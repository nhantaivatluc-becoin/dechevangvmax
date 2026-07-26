import React,{useState} from "react";
import "./Stock.css";


export default function Stock(){


const [money,setMoney]=useState(10000000);

const [portfolio,setPortfolio]=useState([]);



const stocks=[

{
name:"VN30",
code:"VN30",
price:1280,
change:"+1.25%"
},

{
name:"Vinamilk",
code:"VNM",
price:72000,
change:"+0.45%"
},

{
name:"Vingroup",
code:"VIC",
price:52000,
change:"-0.30%"
},

{
name:"Apple",
code:"AAPL",
price:195,
change:"+0.80%"
},

{
name:"Bitcoin",
code:"BTC",
price:67000,
change:"+2.10%"
}

];



const buy=(item)=>{


if(money>item.price){

setMoney(money-item.price);


setPortfolio([

...portfolio,

item

]);


}

};



return (

<div className="stock-page">


<header className="stock-header">

<h1>
📈 STOCK CENTER
</h1>

<div>
💰 {money.toLocaleString()} đ
</div>

</header>



<section className="market-box">

<h2>
Thị trường
</h2>


<div className="market-tabs">

<button>
VN
</button>

<button>
USA
</button>

<button>
CRYPTO
</button>


</div>


</section>




<section className="stock-list">


{
stocks.map((s,i)=>(


<div
className="stock-card"
key={i}
>


<div>

<h3>
{s.name}
</h3>

<p>
{s.code}
</p>

</div>



<div>

<strong>
{s.price.toLocaleString()}
</strong>

<span className={
s.change.includes("-")
?
"red"
:
"green"
}>
{s.change}
</span>


</div>



<button
onClick={()=>buy(s)}
>
MUA
</button>


</div>


))

}


</section>




<section className="portfolio">


<h2>
Danh mục đầu tư
</h2>


{
portfolio.length===0

?

<p>
Chưa có tài sản
</p>


:

portfolio.map((p,i)=>(

<div
key={i}
className="asset"
>

{p.code}

</div>

))

}



</section>



</div>

)

}
