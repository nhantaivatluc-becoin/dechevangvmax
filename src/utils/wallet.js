export function getWallet(){

return JSON.parse(

localStorage.getItem("wallet")

)

||

{

diamond:1000,

gold:1000

};

}



export function saveWallet(data){

localStorage.setItem(

"wallet",

JSON.stringify(data)

);

}


export function addDiamond(amount){


const wallet=getWallet();


wallet.diamond += Number(amount);



saveWallet(wallet);


return wallet;


}

