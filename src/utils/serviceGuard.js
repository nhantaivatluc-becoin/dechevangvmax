export default function serviceGuard(adminBalance,service){


if(adminBalance<=0){


return{


allow:false,


message:

`${service} cần nạp tiền trước khi sử dụng`


};


}



return{


allow:true


};


}

