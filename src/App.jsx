import React, { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";



import HeaderGame from "./components/HeaderGame";
import BottomMenu from "./components/BottomMenu";
import Menu from "./components/Menu";

import MusicManager from "./components/MusicManager";
import InvestmentProfit from "./components/InvestmentProfit";



import Home from "./pages/Home";
import Mining from "./pages/Mining";
import Vip from "./pages/Vip";

import Investment from "./pages/Investment";

import Wallet from "./pages/Wallet";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";


import Farm from "./pages/Farm";
import Shop from "./pages/Shop";


import PVP from "./pages/PVP";
import PetPVP from "./pages/PetPVP";


import Friend from "./pages/Friend";
import Ranking from "./pages/Ranking";


import GiftCode from "./components/GiftCode";



// ADMIN

import Admin from "./pages/Admin";
import AdminDeposit from "./pages/AdminDeposit";
import AdminMembers from "./pages/AdminMembers";



import "./App.css";





function AppLayout(){



const location = useLocation();



const isAdmin =
location.pathname.startsWith("/admin");






useEffect(()=>{


const tg =
window.Telegram?.WebApp;



if(tg){


tg.ready();


tg.expand();


}



},[]);









return(



<div className="app-container">






{
!isAdmin &&

<>

<HeaderGame />

<Menu />

</>

}







{
!isAdmin &&

<MusicManager />

}







{
!isAdmin &&

<InvestmentProfit />

}










<div className="main-content">






<Routes>






<Route
path="/"
element={<Home />}
/>



<Route
path="/home"
element={<Home />}
/>





<Route
path="/mining"
element={<Mining />}
/>





<Route
path="/vip"
element={<Vip />}
/>





<Route
path="/investment"
element={<Investment />}
/>





<Route
path="/wallet"
element={<Wallet />}
/>





<Route
path="/deposit"
element={<Deposit />}
/>





<Route
path="/withdraw"
element={<Withdraw />}
/>





<Route
path="/farm"
element={<Farm />}
/>





<Route
path="/shop"
element={<Shop />}
/>





<Route
path="/pvp"
element={<PVP />}
/>





<Route
path="/pet-pvp"
element={<PetPVP />}
/>





<Route
path="/friend"
element={<Friend />}
/>





<Route
path="/ranking"
element={<Ranking />}
/>





<Route
path="/gift-code"
element={<GiftCode />}
/>







{/* ADMIN CENTER */}



<Route
path="/admin"
element={<Admin />}
/>





<Route
path="/admin-deposit"
element={<AdminDeposit />}
/>





<Route
path="/admin-members"
element={<AdminMembers />}
/>









<Route
path="*"
element={<Home />}
/>






</Routes>







</div>








{
!isAdmin &&

<BottomMenu />

}








</div>


)



}









export default function App(){


return(


<BrowserRouter>


<AppLayout />


</BrowserRouter>


)


}