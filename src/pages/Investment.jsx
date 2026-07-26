import React,{useEffect,useState} from "react";
import "./Investment.css";


const stocks=[

{
symbol:"VIC",
name:"Vingroup",
country:"🇻🇳",
price:52000
},

{
symbol:"VCB",
name:"Vietcombank",
country:"🇻🇳",
price:85000
},

{
symbol:"FPT",
name:"FPT Corp",
country:"🇻🇳",
price:120000
},

{
symbol:"HPG",
name:"Hòa Phát",
country:"🇻🇳",
price:28000
},

{
symbol:"AAPL",
name:"Apple",
country:"🇺🇸",
price:210
},

{
symbol:"TSLA",
name:"Tesla",
country:"🇺🇸",
price:350
},

{
symbol:"NVDA",
name:"Nvidia",
country:"🇺🇸",
price:180
},

{
symbol:"MSFT",
name:"Microsoft",
country:"🇺🇸",
price:520
},

{
symbol:"BTC",
name:"Bitcoin",
country:"🌎",
price:115000
}


];





export default function Investment(){



const [market,setMarket]=useState([]);

const [user,setUser]=useState({});





function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setUser(data);




let saved=

JSON.parse(

localStorage.getItem("market")||"null"

);



if(saved){

setMarket(saved);

}

else{


setMarket(

stocks.map(x=>({

...x,

change:0

}))

);


}



}






useEffect(()=>{


load();



let timer=setInterval(()=>{


setMarket(old=>{


let update=old.map(s=>{


let percent=

(Math.random()*4)-2;


let newPrice=

Math.max(

1,

s.price+(s.price*percent/100)

);




return{

...s,

price:newPrice,

change:percent

};


});



localStorage.setItem(

"market",

JSON.stringify(update)

);



return update;



});



},5000);





return()=>clearInterval(timer);



},[]);










function buy(stock){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



let money=

Number(data.vnd||1000000);





if(money<stock.price){


alert("Không đủ VNĐ");


return;


}





data.vnd=

money-stock.price;




data.investments=

data.investments||[];





data.investments.push({

symbol:stock.symbol,

name:stock.name,

buy:stock.price,

amount:1

});





localStorage.setItem(

"user",

JSON.stringify(data)

);



setUser(data);



alert(

"Mua "+stock.symbol+" thành công"

);



}











return(


<div className="investment-page">



<h1>

🌍 ĐẦU TƯ TOÀN CẦU

</h1>





<div className="money-box">


💵 Vốn:

<b>

{Number(user.vnd||0).toLocaleString()}

VNĐ

</b>


</div>







<h2>

📈 Thị trường

</h2>





<div className="stock-grid">


{

market.map((s,i)=>(



<div

className="stock-card"

key={i}

>



<h2>

{s.country}

{s.symbol}

</h2>



<p>

{s.name}

</p>




<h3>

$

{s.price.toFixed(2)}

</h3>




<p

className={

s.change>=0?

"up":

"down"

}

>

{

s.change>=0?

"▲":

"▼"

}


{

s.change.toFixed(2)

}%


</p>






<button

onClick={()=>buy(s)}

>

MUA

</button>



</div>



))


}



</div>









<h2>

📂 Danh mục đang đầu tư

</h2>




<div className="portfolio">



{

user.investments?.length?


user.investments.map((p,i)=>(



<div

key={i}

>


📌 {p.symbol}

<br/>

Giá mua:

{p.buy}



</div>



))


:

<p>

Chưa có đầu tư

</p>


}



</div>





</div>


)


}
