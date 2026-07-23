import "./Stock.css";

import {
useEffect,
useState
} from "react";

import {
useNavigate
} from "react-router-dom";

import MiniStockChart from "../components/MiniStockChart";



const companies=[


{
logo:"🏢",
name:"ANH BIN MEDIA",
code:"ABM",
country:"Vietnam",
sector:"Media / Advertising / SMM",
marketCap:"500M",
price:25.50,
growth:"+35%"
},


{
logo:"📢",
name:"ANH BIN MEDIA ADS",
code:"ABMA",
country:"Vietnam",
sector:"Digital Marketing",
marketCap:"200M",
price:12.80,
growth:"+22%"
},


{
logo:"🍎",
name:"Apple Inc",
code:"AAPL",
country:"USA",
sector:"Technology",
marketCap:"3.45T",
price:225.48
},


{
logo:"🟢",
name:"NVIDIA Corporation",
code:"NVDA",
country:"USA",
sector:"AI Chip",
marketCap:"4.2T",
price:180.25
},


{
logo:"🪟",
name:"Microsoft",
code:"MSFT",
country:"USA",
sector:"Software",
marketCap:"3.8T",
price:520.30
},


{
logo:"🔍",
name:"Google Alphabet",
code:"GOOGL",
country:"USA",
sector:"Internet",
marketCap:"2.1T",
price:190.20
},


{
logo:"🚗",
name:"Tesla",
code:"TSLA",
country:"USA",
sector:"Automobile",
marketCap:"1T",
price:330.50
},


{
logo:"🏦",
name:"JPMorgan Chase",
code:"JPM",
country:"USA",
sector:"Bank",
marketCap:"850B",
price:290.10
},


{
logo:"🏦",
name:"HSBC",
code:"HSBC",
country:"UK",
sector:"Bank",
marketCap:"160B",
price:110.40
},


{
logo:"📱",
name:"Samsung Electronics",
code:"005930",
country:"Korea",
sector:"Technology",
marketCap:"400B",
price:150.20
},


{
logo:"🏦",
name:"Vietcombank",
code:"VCB",
country:"Vietnam",
sector:"Bank",
marketCap:"20B",
price:95000
},


{
logo:"💻",
name:"FPT Corporation",
code:"FPT",
country:"Vietnam",
sector:"Technology",
marketCap:"8B",
price:130000
}


];






export default function Stock(){


const navigate=useNavigate();



const [stocks,setStocks]=useState(companies);


const [search,setSearch]=useState("");



const [watch,setWatch]=useState(()=>


JSON.parse(

localStorage.getItem("stock_watch") || "[]"

)

);






useEffect(()=>{


const timer=setInterval(()=>{


setStocks(old=>

old.map(stock=>{


const change=

Number(

(

(Math.random()-0.5)*3

)

.toFixed(2)

);



return{


...stock,


price:

Number(

(

stock.price+change

)

.toFixed(2)

),


change


}


})


);



},3000);



return()=>clearInterval(timer);



},[]);









function toggleWatch(code){



let data;



if(watch.includes(code)){


data=

watch.filter(

x=>x!==code

);



}else{


data=[

...watch,

code

];


}



setWatch(data);



localStorage.setItem(

"stock_watch",

JSON.stringify(data)

);



}










const list=

stocks.filter(stock=>


(

stock.name+

stock.code+

stock.country+

stock.sector

)

.toLowerCase()

.includes(

search.toLowerCase()

)


);










const gainers=[...stocks]

.sort(

(a,b)=>

(b.change||0)-(a.change||0)

)

.slice(0,3);





const losers=[...stocks]

.sort(

(a,b)=>

(a.change||0)-(b.change||0)

)

.slice(0,3);









return(



<div className="stock-page">





<h1>

🌎 GLOBAL STOCK MARKET

</h1>







<input

className="stock-search"

placeholder="🔎 Tìm công ty / mã cổ phiếu"

value={search}

onChange={e=>

setSearch(e.target.value)

}

/>









<div className="market-section">


<h2>

🚀 Tăng mạnh

</h2>


{

gainers.map(s=>(


<div

className="small-stock"

key={s.code}

>


{s.logo}

<b>

{s.code}

</b>


<span className="up">

▲ {s.change||0}%

</span>


</div>


))


}



</div>









<div className="market-section">


<h2>

🔻 Giảm mạnh

</h2>


{

losers.map(s=>(


<div

className="small-stock"

key={s.code}

>


{s.logo}

<b>

{s.code}

</b>


<span className="down">

▼ {Math.abs(s.change||0)}%

</span>


</div>


))


}



</div>









<h2>

⭐ Watchlist

</h2>








<div className="stock-list">



{


list.map(stock=>(




<div

className="stock-card"

key={stock.code}

>




<button

className="star"

onClick={(e)=>{


e.stopPropagation();


toggleWatch(stock.code);


}}

>


{

watch.includes(stock.code)

?

"⭐"

:

"☆"

}


</button>







<div

onClick={()=>navigate(

"/market-detail",

{

state:stock

}

)}

>






<h2>

{stock.logo}

{stock.name}

</h2>





<h3>

{stock.code}

</h3>








<MiniStockChart


up={(stock.change||0)>=0}


data={

Array.from(

{length:10},

(_,i)=>({


price:

stock.price+

(Math.random()-0.5)*10


})

)

}


/>






<h1>

$

{

Number(stock.price)

.toLocaleString()

}

</h1>







<p

className={

(stock.change||0)>=0

?

"up"

:

"down"

}

>


{

(stock.change||0)>=0

?

"▲"

:

"▼"

}


{

Math.abs(stock.change||0)

}%



</p>







<p>

🌎 {stock.country}

</p>



<p>

🏢 {stock.sector}

</p>



<p>

💰 {stock.marketCap}

</p>





<button>

📊 Chi tiết

</button>







</div>



</div>




))


}



</div>






</div>



)


}
