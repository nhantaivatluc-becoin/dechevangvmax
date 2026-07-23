import "./MarketDetail.css";

import {
useEffect,
useState
} from "react";

import {
useLocation,
useNavigate
} from "react-router-dom";


import StockChart from "../components/StockChart";


import {
useWallet
} from "../context/WalletContext";


import {
ABMData
} from "../data/ABMData";


import {
ABMOrderBook,
bestBid,
bestAsk
} from "../data/ABMOrderBook";


import {
placeBuyOrder,
placeSellOrder
} from "../data/ABMTrading";


import {
runMatching
} from "../data/ABMMatchingEngine";


import {
calculateABMPrice,
ABMStats
} from "../data/ABMEngine";







export default function MarketDetail(){


const location=useLocation();

const navigate=useNavigate();



const {

wallet

}=useWallet();





const stock=

location.state || ABMData;



const isABM=

stock.code==="ABM";





const [price,setPrice]=useState(

stock.price || 25.5

);





const [amount,setAmount]=useState(1);



const [orderPrice,setOrderPrice]=useState(

price

);



const [side,setSide]=useState(

"BUY"

);





const [trades,setTrades]=useState([]);



const [history,setHistory]=useState(

Array.from(

{length:40},

(_,i)=>({

time:i,

price

})

)

);








useEffect(()=>{



const timer=setInterval(()=>{



if(isABM){



const matched=

runMatching();




if(matched.length){


setTrades(old=>[

...old,

...matched

].slice(-20));



setPrice(

matched[matched.length-1].price

);



}else{



setPrice(

calculateABMPrice({


price,


buy:

ABMStats.buyVolume,


sell:

ABMStats.sellVolume,


growth:

ABMStats.revenueGrowth



})

);



}



}



setHistory(old=>[

...old.slice(-39),

{


time:new Date()

.toLocaleTimeString(),


price


}

]);




},3000);




return()=>clearInterval(timer);



},[price,isABM]);









function submitOrder(){



if(side==="BUY"){


placeBuyOrder(

orderPrice,

amount

);


}else{


placeSellOrder(

orderPrice,

amount

);


}



alert(

side+

" ORDER CREATED"

);



}









return(


<div className="market-detail">





<button

className="back"

onClick={()=>navigate(-1)}

>

⬅ BACK

</button>








<div className="stock-header">


<h1>

{stock.logo}

{stock.name}

</h1>



<h2>

{stock.code}

</h2>


<p>

🌎 {stock.country}

</p>


<p>

🏭 {stock.sector}

</p>


</div>








<div className="current-price">


<h1>

${price}

</h1>


<span className="green">

LIVE MARKET

</span>


</div>









<StockChart

data={history}

/>









{isABM &&


<>


<div className="company-card">


<h2>

🏢 ANH BIN MEDIA

</h2>


<p>

Founder:

<b>

{ABMData.founder}

</b>

</p>


<p>

Office:

<b>

{ABMData.office}

</b>

</p>



<p>

Employees:

<b>

{ABMData.business.employees}

</b>

</p>



<p>

Customers:

<b>

{ABMData.business.customers}

</b>

</p>



<p>

ADS Growth:

<b>

+{ABMData.business.growth}%

</b>

</p>



</div>










<div className="ipo-card">


<h2>

🚀 IPO

</h2>


<p>

IPO Price:

<b>

${ABMData.ipo.price}

</b>

</p>


<p>

Total Shares:

<b>

{ABMData.shares.total}

</b>

</p>


<p>

Public:

<b>

{ABMData.shares.public}

</b>

</p>


<p>

Investors:

<b>

{ABMData.market.holders}

</b>

</p>



</div>









<div className="health-card">


<h2>

📊 COMPANY HEALTH

</h2>


<p>

❤️ {ABMStats.health}

</p>


<p>

Revenue:

<b>

+{ABMStats.revenueGrowth}%

</b>

</p>


</div>









<div className="order-book">


<h2>

📒 ORDER BOOK

</h2>



<div className="order-columns">



<div>


<h3>

🟢 BUY

</h3>


{

ABMOrderBook.buyOrders.map(

(o,i)=>(

<p key={i}>

{o.price}

-

{o.volume}

</p>

)

)

}


</div>






<div>


<h3>

🔴 SELL

</h3>


{

ABMOrderBook.sellOrders.map(

(o,i)=>(

<p key={i}>

{o.price}

-

{o.volume}

</p>

)

)

}


</div>



</div>





<p>

Best Bid:

<b>

{bestBid()?.price}

</b>

</p>




<p>

Best Ask:

<b>

{bestAsk()?.price}

</b>

</p>


</div>









<div className="trade-history">


<h2>

⚡ TRADE HISTORY

</h2>


{

trades.map((t,i)=>(


<p key={i}>

💰 {t.price}

×

{t.volume}

</p>


))


}



</div>







<div className="trading-panel">


<h2>

📈 PLACE ORDER

</h2>




<select

value={side}

onChange={e=>

setSide(e.target.value)

}

>


<option>

BUY

</option>


<option>

SELL

</option>


</select>







<input

type="number"

value={orderPrice}

onChange={e=>

setOrderPrice(

Number(e.target.value)

)

}


/>





<input

type="number"

value={amount}

onChange={e=>

setAmount(

Number(e.target.value)

)

}

/>






<button

onClick={submitOrder}

>

CREATE ORDER

</button>





</div>



</>


}





<div className="wallet-box">


💰 GOLD:

<b>

{wallet?.gold}

</b>


</div>





</div>


)


}
