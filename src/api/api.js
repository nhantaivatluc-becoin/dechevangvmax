const API="http://localhost:3000/api";


export async function getWallet(id){

const res=await fetch(
`${API}/wallet/${id}`
);

return await res.json();

}



export async function exchange(userId,gold){

const res=await fetch(

`${API}/economy/exchange`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

userId,

gold

})

}

);


return await res.json();

}




export async function sendGift(userId,code){


const res=await fetch(

`${API}/economy/giftcode`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

userId,

code

})

}

);


return await res.json();


}




export async function getRanking(){


const res=await fetch(

`${API}/economy/ranking`

);


return await res.json();


}

