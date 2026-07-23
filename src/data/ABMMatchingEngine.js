import {

ABMOrderBook,

addTrade

} from "./ABMOrderBook";





export function runMatching(){



let matched=[];




ABMOrderBook.buyOrders.forEach((buy)=>{



ABMOrderBook.sellOrders.forEach((sell)=>{





if(

buy.price >= sell.price

){



const volume=Math.min(

buy.volume,

sell.volume

);





const trade={


price:sell.price,


volume,


time:new Date()

.toLocaleTimeString(),


type:"MATCH"


};





buy.volume-=volume;


sell.volume-=volume;



addTrade(trade);



matched.push(trade);



}



});



});







ABMOrderBook.buyOrders=

ABMOrderBook.buyOrders.filter(

x=>x.volume>0

);





ABMOrderBook.sellOrders=

ABMOrderBook.sellOrders.filter(

x=>x.volume>0

);






return matched;



}






export function lastTrade(){



const list=

ABMOrderBook.trades;



return list.length

?

list[list.length-1]

:

null;


}



