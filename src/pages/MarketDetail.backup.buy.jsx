import "./MarketDetail.css";


import {
useEffect,
useState
} from "react";


import {
useLocation,
useNavigate
} from "react-router-dom";



export default function MarketDetail(){



const location=useLocation();

const navigate=useNavigate();




const stock = location.state || {


name:"NVIDIA Corporation",

code:"NVDA",

country:"USA",

sector:"Technology",

price:180,

change:0


};





const [price,setPrice]=useState(

Number(stock.price)

);



const [change,setChange]=useState(

Number(stock.change || 0)

);



const [quantity,setQuantity]=useState(1);



const [history,setHistory]=useState([

150,

160,

155,

170,

165,

180

]);




const [time,setTime]=useState("1D");





useEffect(()=>{


const timer=setInterval(()=>{


const move=

Number(

((Math.random()-0.5)*4)

.toFixed(2)

);



setPrice(old=>


Number(

(old+move)

.toFixed(2)

)

);



setChange(move);



setHistory(old=>[

...old.slice(-10),

price

]);



},3000);



return()=>clearInterval(timer);



},[price]);








const total =

(price * quantity)

.toFixed(2);







return(


<div className="market-detail">





<button

className="back-btn"

onClick={()=>navigate(-1)}

>

⬅ Quay lại

</button>






<div className="market-header">


<h1>

📈 {stock.name}

</h1>


<h3>

{stock.code}

•

{stock.country}

</h3>



<p>

🏢 {stock.sector}

</p>



</div>






<div className="price-box">


<h2>

${price}

</h2>


<div

className={

change>=0

?

"profit"

:

"loss"

}

>

{change>=0?"▲":"▼"}

{change}%


</div>



</div>








<div className="chart-box">


{

history.map((h,i)=>(



<div


key={i}


className="chart-bar"



style={{

height:

Math.max(

40,

h

)+"px"

}}


/>



))


}


</div>







<div className="time-menu">


{

["1H","1D","1W","1M","1Y"]

.map(t=>(



<button


key={t}


className={time===t?"active-time":""}


onClick={()=>setTime(t)}

>


{t}


</button>



))


}


</div>







<div className="buy-box">


<h2>

🛒 Mua cổ phiếu

</h2>



<p>

Giá hiện tại:

<b>

${price}

</b>

</p>




<input


type="number"


min="1"


value={quantity}


onChange={e=>

setQuantity(

Number(e.target.value)

)

}



/>



<p>


Tổng:

<strong>

${total}

</strong>


</p>




<button

className="buy-btn"

>


🟢 XÁC NHẬN MUA


</button>




</div>








<div className="company-info">


<h2>

Thông tin

</h2>


<p>

🌎 Thị trường:

{stock.country}

</p>


<p>

Mã:

{stock.code}

</p>


<p>

Ngành:

{stock.sector}

</p>


</div>






</div>


)


}
