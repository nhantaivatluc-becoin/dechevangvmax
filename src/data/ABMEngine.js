export function calculateABMPrice({

price,

buy,

sell,

growth


}){


let newPrice=price;



if(buy>sell){

newPrice+=0.15;

}



if(sell>buy){

newPrice-=0.15;

}



if(growth>30){

newPrice+=0.25;

}



return Number(

newPrice.toFixed(2)

);



}



export const ABMStats={


buyVolume:1200,


sellVolume:350,


revenueGrowth:35,


health:"GOOD",


employees:50,


customers:850



};

