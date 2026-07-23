import {

ABMOrderBook

} from "./ABMOrderBook";




export function placeBuyOrder(price, volume){


const order={


id:Date.now(),


type:"BUY",


price:Number(price),


volume:Number(volume),


time:new Date().toLocaleTimeString()


};



ABMOrderBook.buyOrders.push(order);



ABMOrderBook.buyOrders.sort(

(a,b)=>b.price-a.price

);



return order;


}







export function placeSellOrder(price, volume){



const order={


id:Date.now(),


type:"SELL",


price:Number(price),


volume:Number(volume),


time:new Date().toLocaleTimeString()


};



ABMOrderBook.sellOrders.push(order);



ABMOrderBook.sellOrders.sort(

(a,b)=>a.price-b.price

);



return order;


}








export function marketBuy(price,volume){



return placeBuyOrder(

price,

volume

);



}






export function marketSell(price,volume){



return placeSellOrder(

price,

volume

);



}



