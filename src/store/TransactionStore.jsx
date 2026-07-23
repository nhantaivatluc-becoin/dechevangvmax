import {

createContext,

useContext,

useEffect,

useState

} from "react";



const TransactionContext=createContext();




export function TransactionProvider({children}){


const [transactions,setTransactions]=useState([


{

user:"KIEN",

amount:50000,

status:"Thành công",

time:"Vừa xong"

},


{

user:"ANH BIN",

amount:25000,

status:"Thành công",

time:"1 phút trước"

}


]);





useEffect(()=>{


const timer=setInterval(()=>{


const names=[

"KIEN",

"ANH BIN",

"PLAYER",

"VƯƠNG GIẢ"

];



const values=[

25000,

50000,

100000

];



setTransactions(prev=>[


{


user:

names[Math.floor(Math.random()*names.length)],


amount:

values[Math.floor(Math.random()*values.length)],


status:"Thành công",


time:"Vừa xong"


},


...prev.slice(0,5)



]);



},15000);





return()=>clearInterval(timer);



},[]);







return(


<TransactionContext.Provider

value={{

transactions

}}

>


{children}


</TransactionContext.Provider>


)


}





export function useTransaction(){


return useContext(TransactionContext);


}
