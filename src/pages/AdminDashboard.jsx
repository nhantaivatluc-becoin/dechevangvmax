import {checkAdmin} from "../config/admin";

import AdminLogin from "./AdminLogin";

import AdminVip from "./AdminVip";

import AdminDeposit from "./AdminDeposit";


export default function AdminDashboard(){


if(!checkAdmin()){


return <AdminLogin/>;


}



return(

<div>


<h1>
👑 ADMIN PANEL
</h1>


<AdminVip/>


<AdminDeposit/>


</div>

)

}
