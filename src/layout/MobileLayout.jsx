import React from "react";

import Header from "../components/Header";

import BottomMenu from "../components/BottomMenu";


export default function MobileLayout({children}){


return(

<div className="mobile-app">


<Header />



<main className="app-content">

{children}

</main>




<BottomMenu />


</div>

)

}
