import React from "react";

import ReactDOM from "react-dom/client";

import {
BrowserRouter
} from "react-router-dom";


import App from "./App.jsx";

import "./index.css";


import {
WalletProvider
} from "./context/WalletContext.jsx";


import {
UserProvider
} from "./context/UserContext.jsx";



ReactDOM.createRoot(

document.getElementById("root")

)

.render(


<React.StrictMode>


<BrowserRouter>


<UserProvider>


<WalletProvider>


<App />


</WalletProvider>


</UserProvider>


</BrowserRouter>


</React.StrictMode>


);
