export const vipList=[

{
level:1,
price:50000
},

{
level:2,
price:100000
},

{
level:3,
price:200000
},

{
level:4,
price:500000
},

{
level:5,
price:1000000
},

{
level:6,
price:2000000
},

{
level:7,
price:5000000
},

{
level:8,
price:10000000
},

{
level:9,
price:20000000
},

{
level:10,
price:50000000
},

{
level:11,
price:100000000
},

{
level:12,
price:200000000
},

{
level:13,
price:500000000
},

{
level:14,
price:1000000000
},

{
level:15,
price:2000000000
}

];



export function createTransferCode(vip){

const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

let code="";


for(let i=0;i<6;i++){

code+=chars[Math.floor(Math.random()*chars.length)];

}


return `DECHEVANG VIP${vip} ${code}`;

}
