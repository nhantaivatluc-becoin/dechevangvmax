import {io} from "socket.io-client";


export const gameSocket=io(

"http://localhost:3000",

{

autoConnect:true,

reconnection:true

}

);


export function joinGame(room){

gameSocket.emit(

"join_game",

{

room

}

);

}



export function playGame(data){

gameSocket.emit(

"game_action",

data

);

}

