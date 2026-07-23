import {

createContext,

useContext,

useState

} from "react";



const GameContext=createContext();




export function GameProvider({children}){



const [gold,setGold]=useState(

Number(localStorage.getItem("gold") || 1000)

);



const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond") || 0)

);



const [cashValue,setCashValue]=useState(

Number(localStorage.getItem("cashValue") || 0)

);





const updateWallet=(newGold)=>{



const newDiamond =

newGold / 80000000;



const newCash =

newDiamond * 400;





setGold(newGold);


setDiamond(

Number(newDiamond.toFixed(6))

);



setCashValue(

Number(newCash.toFixed(2))

);





localStorage.setItem(

"gold",

newGold

);



localStorage.setItem(

"diamond",

newDiamond.toFixed(6)

);



localStorage.setItem(

"cashValue",

newCash.toFixed(2)

);



};






const mineGold=()=>{



const reward = 0.5;



const total =

Number(gold)+reward;



updateWallet(total);



};






return(


<GameContext.Provider


value={{


gold,


diamond,


cashValue,


mineGold,


setGold,


setDiamond


}}



>


{children}


</GameContext.Provider>


)



}





export function useGame(){


return useContext(GameContext);


}
