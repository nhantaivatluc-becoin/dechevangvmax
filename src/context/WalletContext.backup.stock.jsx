import {createContext,useContext,useState,useEffect} from "react";


const WalletContext=createContext();


export function WalletProvider({children}){


const [wallet,setWallet]=useState({

gold:Number(localStorage.getItem("gold")||1000),

diamond:Number(localStorage.getItem("diamond")||0),

vnd:Number(localStorage.getItem("vnd")||0)

});



useEffect(()=>{

localStorage.setItem("gold",wallet.gold);

localStorage.setItem("diamond",wallet.diamond);

localStorage.setItem("vnd",wallet.vnd);


},[wallet]);




const addGold=(amount)=>{

setWallet(w=>({

...w,

gold:w.gold+amount

}));

};



const addDiamond=(amount)=>{

setWallet(w=>({

...w,

diamond:w.diamond+amount

}));

};




const withdrawGold=(amount)=>{


if(wallet.gold<amount)

return false;



setWallet(w=>({

...w,

gold:w.gold-amount,

diamond:w.diamond+(amount/1800000)

}));


return true;


};




return(

<WalletContext.Provider

value={{

wallet,

setWallet,

addGold,

addDiamond,

withdrawGold

}}

>


{children}


</WalletContext.Provider>


)


}




export function useWallet(){

return useContext(WalletContext);

}

