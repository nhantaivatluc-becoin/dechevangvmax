export function getUser(){

return JSON.parse(
localStorage.getItem("user") || "{}"
);

}



export function saveUser(user){

localStorage.setItem(
"user",
JSON.stringify(user)
);

}



export function createInvestment(data){


let user=getUser();



user.investment=data;


user.investStart=
Date.now();



user.investProfit=
0;



saveUser(user);



return user;


}






export function updateInvestmentProfit(){


let user=getUser();



if(!user.investment)
return user;



let vip=user.vip||0;



let bonus=
1+
(vip*0.2);




let profit=

user.investment.capital*

0.00001*

bonus;



user.investProfit=
Number(
(user.investProfit||0)
+
profit
.toFixed(2)
);



user.vnd=

Number(user.vnd||0)
+
profit;



saveUser(user);



return user;


}
