import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";


const app = express();


app.use(cors());

app.use(express.json());



const server = http.createServer(app);



const io = new Server(server,{

cors:{
origin:"*"
}

});



let onlinePlayers = 0;


let rooms = {};



function createRoom(id){


if(!rooms[id]){


rooms[id]={

players:[],
messages:[]

};


}


return rooms[id];


}







io.on("connection",(socket)=>{


onlinePlayers++;


io.emit(
"online_count",
onlinePlayers
);



console.log(
"PLAYER CONNECT:",
socket.id
);







socket.on(
"join_room",
(data)=>{


const room=createRoom(data.roomId);



socket.join(data.roomId);



room.players.push({

id:socket.id,

...data.user

});




io.to(data.roomId).emit(
"players",
room.players
);



});









socket.on(
"room_message",
(data)=>{


const room=createRoom(data.roomId);



const msg={

user:data.user,

text:data.message

};



room.messages.push(msg);



io.to(data.roomId).emit(

"message",

data.user+": "+data.message

);



});









socket.on(
"start_match",
(data)=>{


const room=createRoom(data.roomId);



if(room.players.length < 2){


io.to(socket.id).emit(

"match_result",

{

text:"❌ Cần ít nhất 2 người chơi"

}

);


return;

}





const winner=

room.players[

Math.floor(

Math.random()*room.players.length

)

];




io.to(data.roomId).emit(

"match_result",

{

text:"🏆 Người thắng: "+winner.name

}

);



});









socket.on(
"disconnect",
()=>{


onlinePlayers--;



io.emit(

"online_count",

onlinePlayers

);



Object.keys(rooms).forEach(

(id)=>{


rooms[id].players =

rooms[id].players.filter(

p=>p.id!==socket.id

);



io.to(id).emit(

"players",

rooms[id].players

);


});


console.log(

"PLAYER OFF:",

socket.id

);


});


});







app.get("/",(req,res)=>{


res.send(

"DE CHE VANG MAX REALTIME SERVER ONLINE"

);


});






server.listen(3000,()=>{


console.log(

"SERVER SOCKET RUN PORT 3000"

);


});

