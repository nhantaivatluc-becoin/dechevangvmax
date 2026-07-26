import React from "react";
import {Link,Outlet} from "react-router-dom";

export default function AdminLayout(){

return (

<div style={{
padding:"20px"
}}>


<h1>
🔥 DECHEVANG VMAX ADMIN
</h1>


<nav>


<Link to="/admin">
Dashboard
</Link>


{" | "}


<Link to="/admin/users">
Users
</Link>


{" | "}


<Link to="/admin/deposit">
Deposit VIP
</Link>


{" | "}


<Link to="/admin/withdraw">
Withdraw
</Link>


{" | "}


<Link to="/admin/event">
Event
</Link>


</nav>


<hr/>


<Outlet/>


</div>

);

}
