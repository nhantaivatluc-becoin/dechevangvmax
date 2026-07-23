export const ABMOrderBook = {


buyOrders:[

{
price:25.50,
volume:500
},

{
price:25.30,
volume:800
},

{
price:25.10,
volume:1200
}

],



sellOrders:[

{
price:25.80,
volume:400
},

{
price:26.00,
volume:900
},

{
price:26.50,
volume:1500
}

],



trades:[]



};




export function bestBid(){

return ABMOrderBook.buyOrders[0];

}



export function bestAsk(){

return ABMOrderBook.sellOrders[0];

}



export function addTrade(data){

ABMOrderBook.trades.push(data);

}

