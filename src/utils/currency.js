let wallet={

gold:10000,

diamond:100

};



export function getWallet(){

return wallet;

}



export function payGold(value){

if(wallet.gold < value)

return false;


wallet.gold-=value;

return true;

}



export function payDiamond(value){

if(wallet.diamond < value)

return false;


wallet.diamond-=value;

return true;

}



export function rewardGold(value){

wallet.gold+=value;

}



export function rewardDiamond(value){

wallet.diamond+=value;

}

