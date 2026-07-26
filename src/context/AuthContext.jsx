import {createContext,useContext,useEffect,useState} from "react";

const AuthContext=createContext();


export function AuthProvider({children}){

const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);


useEffect(()=>{

async function init(){

try{

let telegramId;
let username;


const tg=window.Telegram?.WebApp;


if(tg){

tg.ready();

telegramId=tg.initDataUnsafe?.user?.id;
username=tg.initDataUnsafe?.user?.username;

}


// TEST LOCAL ADMIN

if(!telegramId){

telegramId="8454844333";
username="Admin";

}



const res=await fetch(
"http://localhost:3000/api/auth/login",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

telegramId,
username

})

}

);


const data=await res.json();


console.log("AUTH DATA:",data);


if(data.success){

setUser(data.user);

}


}catch(e){

console.log("AUTH ERROR",e);

}


setLoading(false);


}


init();


},[]);



return(

<AuthContext.Provider value={{
user,
setUser,
loading
}}>

{children}

</AuthContext.Provider>

);


}



export function useAuth(){

return useContext(AuthContext);

}
