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


window.dispatchEvent(
new Event("financeUpdate")
);


}




export function addGold(amount){


let user=getUser();



user.gold =
Number(user.gold||0)
+
Number(amount);



/*

1.800.000 GOLD
=0.01 DIAMOND

*/


user.diamond =
Number(
(user.gold/1800000)*0.01
.toFixed(6)
);



/*

0.01 diamond = 0.020 VNĐ

*/


user.vnd =
Number(
(user.diamond*2)
.toFixed(3)
);



saveUser(user);



return user;


}
