import React,{
createContext,
useContext,
useEffect,
useState
} from "react";


import {

getTelegramUser

} from "../api/telegram";



const WalletContext=createContext();



export function WalletProvider({children}){


const [wallet,setWallet]=useState({

gold:1000,

diamond:0,

autoMine:false

});





useEffect(()=>{


const telegramUser=

getTelegramUser();



if(telegramUser){


console.log(

"Telegram User",

telegramUser

);


}


},[]);







function startAutoMine(){


setWallet(old=>({


...old,


autoMine:true


}));


}







useEffect(()=>{


if(!wallet.autoMine)

return;



const timer=setInterval(()=>{



setWallet(old=>({


...old,


gold:

Number(old.gold)+0.5


}));



},60000);





return()=>clearInterval(timer);



},[wallet.autoMine]);









return(

<WalletContext.Provider


value={{

wallet,

setWallet,

startAutoMine


}}


>


{children}


</WalletContext.Provider>


);


}






export function useWallet(){



return useContext(WalletContext);



}



export default WalletContext;

