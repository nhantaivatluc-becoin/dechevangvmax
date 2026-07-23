import {
createContext,
useContext,
useEffect,
useState
} from "react";


const UserContext=createContext();



export function UserProvider({children}){


const [user,setUser]=useState({

gold:0,

diamond:0,

vnd:0

});



async function loadUser(){


try{


const res=await fetch(
"http://localhost:3000/api/auth/me"
);


const data=await res.json();



if(data.user){

setUser(data.user);

}


}catch(e){

console.log(e);

}


}



useEffect(()=>{


loadUser();


const timer=setInterval(()=>{

loadUser();

},3000);



return()=>clearInterval(timer);


},[]);



return(

<UserContext.Provider

value={{

user,

setUser,

reload:loadUser

}}

>


{children}


</UserContext.Provider>


)


}



export function useUser(){

return useContext(UserContext);

}
