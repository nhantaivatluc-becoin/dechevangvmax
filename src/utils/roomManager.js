const rooms={};



export function joinRoom(id,player){


if(!rooms[id])

rooms[id]=[];



rooms[id].push(player);



return rooms[id];

}



export function leaveRoom(id,name){


if(!rooms[id])

return;



rooms[id]=rooms[id].filter(

p=>p.name!==name

);


}



export function getRoom(id){


return rooms[id] || [];


}



export function countRoom(id){


return getRoom(id).length;


}

