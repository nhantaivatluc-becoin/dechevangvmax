import "./App.css";

import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Home from "./pages/Home";
import Wheel from "./pages/Wheel";
import Farm from "./pages/Farm";
import Shop from "./pages/Shop";
import Wallet from "./pages/Wallet";
import VIP from "./pages/VIP";
import PVP from "./pages/PVP";

import Stock from "./pages/Stock";


import BottomMenu from "./components/BottomMenu";

import FloatingPanels from "./components/FloatingPanels";



export default function App(){


return(


<>


<FloatingPanels/>


<Routes>


<Route

path="/"

element={<Home/>}

/>



<Route

path="/wheel"

element={<Wheel/>}

/>



<Route

path="/farm"

element={<Farm/>}

/>



<Route

path="/shop"

element={<Shop/>}

/>



<Route

path="/wallet"

element={<Wallet/>}

/>



<Route

path="/vip"

element={<VIP/>}

/>



<Route

path="/pvp"

element={<PVP/>}

/>



<Route

path="/stock"

element={<Stock/>}

/>



</Routes>




<BottomMenu/>


</>


)

}
