import {

BrowserRouter,

Routes,

Route

} from "react-router-dom";



import Home from "./pages/Home";

import Wheel from "./pages/Wheel";

import Farm from "./pages/Farm";

import VIP from "./pages/VIP";

import Wallet from "./pages/Wallet";

import Stock from "./pages/Stock";



import BottomMenu from "./components/BottomMenu";

import FloatingPanels from "./components/FloatingPanels";




export default function App(){


return(


<div className="app">



<FloatingPanels />




<Routes>


<Route

path="/"

element={<Home/>}

/>



<Route

path="/home"

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

path="/vip"

element={<VIP/>}

/>



<Route

path="/wallet"

element={<Wallet/>}

/>



<Route

path="/stock"

element={<Stock/>}

/>



</Routes>



<BottomMenu />



</div>


)


}
