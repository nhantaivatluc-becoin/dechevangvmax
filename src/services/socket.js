import {io} from "socket.io-client";


export const socket = io(
"http://localhost:3000",
{
transports:["websocket"]
}
);



export function connectServer(){

if(!socket.connected){

socket.connect();

}

}



export function joinRoom(roomId,user){


socket.emit(

"join_room",

{

roomId,

user

}

);


}



export function sendMessage(roomId,user,message){


socket.emit(

"room_message",

{

roomId,

user,

message

}

);


}



export function startMatch(roomId){


socket.emit(

"start_match",

{

roomId

}

);


}

