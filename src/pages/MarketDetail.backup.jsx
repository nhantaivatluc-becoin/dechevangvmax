import "./MarketDetail.css";

import {
useEffect,
useState
} from "react";

import {
useLocation,
useNavigate
} from "react-router-dom";

import {
useWallet
} from "../context/WalletContext";


export default function MarketDetail(){


const location=useLocation();

const navigate=useNavigate();

const {buyStock}=useWallet();



const stock = location.state || {

name:"NVIDIA Corporation",

code:"NVDA",

country:"USA",

sector:"Technology",

price:180,

change:0

};



const [price,setPrice]=useState(Number(stock.price));

const [change,setChange]=useState(Number(stock.change));

const [quantity,setQuantity]=useState(1);

const [history,setHistory]=useState([
120,140,160,150,175,180
]);




useEffect(()=>{


const timer=setInterval(()=>{


const move=

Number(((Math.random()-0.5)*4).toFixed(2));


setPrice(p=>Number((p+move).toFixed(2)));

setChange(move);


setHistory(h=>[
...h.slice(-8),
price
]);


},3000);


return()=>clearInterval(timer);


},[price]);




const total=(price*quantity).toFixed(2);




function handleBuy(){


const ok=buyStock(

{

...stock,

price

},

quantity

);



if(ok){

alert("✅ Mua cổ phiếu thành công");

}else{

alert("❌ Không đủ VNĐ");

}


}



return(


<div className="market-detail">


<button

className="back-btn"

onClick={()=>navigate(-1)}

>

⬅ Quay lại

</button>



<h1>

📈 {stock.name}

</h1>


<h3>

{stock.code} - {stock.country}

</h3>



<div className="price-box">


<h2>

${price}

</h2>


<p>

{change>=0?"📈":"📉"}

{change}%

</p>


</div>




<div className="chart-box">


{

history.map((h,i)=>(


<div

key={i}

className="chart-bar"

style={{

height:h+"px"

}}


/>


))


}


</div>




<div className="buy-box">


<h2>

🛒 Mua cổ phiếu

</h2>


<p>

Giá:

{price}

USD

</p>



<input

type="number"

min="1"

value={quantity}

onChange={e=>setQuantity(Number(e.target.value))}

/>



<p>

Tổng:

{total}

USD

</p>



<button

className="buy-btn"

onClick={handleBuy}

>

🟢 XÁC NHẬN MUA

</button>


</div>




<div>


<h2>

🏢 Công ty

</h2>


<p>

Ngành: {stock.sector}

</p>


</div>



</div>


)


}
