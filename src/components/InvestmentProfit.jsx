import {useEffect} from "react";


export default function InvestmentProfit(){



useEffect(()=>{



function calculate(){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);





if(!data.investment)

return;





let capital=

Number(

data.investment.capital||0

);






if(capital<=0)

return;







let vip=

Number(data.vip||0);







let rate=

0.001 +

(vip*0.0005);







let profit=

capital*rate;







// cộng lợi nhuận


data.vnd=

Number(data.vnd||0)

+

profit;







data.investmentProfit=

Number(data.investmentProfit||0)

+

profit;







data.profitHistory=

data.profitHistory||[];






data.profitHistory.push({


type:"investment",


amount:profit,


time:new Date().toLocaleString()


});







if(data.profitHistory.length>100){


data.profitHistory.shift();


}






localStorage.setItem(

"user",

JSON.stringify(data)

);







window.dispatchEvent(

new Event("financeUpdate")

);





}









let timer=setInterval(

calculate,

60000

);






return()=>clearInterval(timer);





},[]);








return null;


}
