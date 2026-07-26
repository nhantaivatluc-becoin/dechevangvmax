import React from "react";
import { Outlet } from "react-router-dom";

import BottomMenu from "./BottomMenu";
import HamburgerMenu from "./HamburgerMenu";

import "./Layout.css";


export default function Layout(){

return (

<div className="game-layout">


<main className="game-content">

<Outlet />

</main>


<HamburgerMenu />


<BottomMenu />


</div>

);

}
