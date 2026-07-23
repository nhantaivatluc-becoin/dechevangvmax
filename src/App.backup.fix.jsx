import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import React from "react";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import {

Routes,

Route

} from "react-router-dom";



import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import {

WalletProvider

} from "./context/WalletContext";



import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import Home from "./pages/Home";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import Stock from "./pages/Stock";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import MarketDetail from "./pages/MarketDetail";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import Portfolio from "./pages/Portfolio";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import VIP from "./pages/VIP";

import {useEffect} from 'react';
import {initTelegram,getTelegramUser} from './services/telegram';
import {saveTelegramPlayer} from './services/player';

import BottomMenu from "./components/BottomMenu";







export default function App(){



return(



<WalletProvider>



<div className="app">





<Routes>



<Route

path="/"

element={<Home/>}

/>





<Route

path="/stock"

element={<Stock/>}

/>





<Route

path="/market-detail"

element={<MarketDetail/>}

/>





<Route

path="/portfolio"

element={<Portfolio/>}

/>





<Route

path="/vip"

element={<VIP/>}

/>





</Routes>







<BottomMenu/>





</div>



</WalletProvider>



);



}

