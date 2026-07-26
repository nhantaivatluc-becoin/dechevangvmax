const API="http://localhost:3000/api";


export async function api(path,options={}){

const res=await fetch(
API+path,
{
headers:{
"Content-Type":"application/json"
},
...options
}
);


return await res.json();

}
