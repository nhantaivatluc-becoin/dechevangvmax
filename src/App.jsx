import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Farm from "./pages/Farm";
import Wheel from "./pages/Wheel";
import Shop from "./pages/Shop";
import Wallet from "./pages/Wallet";
import VIP from "./pages/VIP";
import PVP from "./pages/PVP";

import BottomMenu from "./components/BottomMenu";
import GameHeader from "./components/GameHeader";

import { initTelegram, getTelegramUser } from "./services/telegram";
import { saveTelegramPlayer } from "./services/player";

import "./App.css";


export default function App(){

useEffect(()=>{

async function telegram(){

try{

initTelegram();

const user=getTelegramUser();

if(user){

await saveTelegramPlayer(user);

}

console.log("Telegram user:",user);


}catch(e){

console.log(e);

}


}


telegram();


},[]);



return (

<>

<GameHeader />


<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/farm" element={<Farm/>}/>

<Route path="/wheel" element={<Wheel/>}/>

<Route path="/shop" element={<Shop/>}/>

<Route path="/wallet" element={<Wallet/>}/>

<Route path="/vip" element={<VIP/>}/>

<Route path="/pvp" element={<PVP/>}/>


</Routes>


<BottomMenu />


</>


);


}
