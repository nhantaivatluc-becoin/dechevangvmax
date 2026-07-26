import {useAuth} from "../context/AuthContext";


function UserHeader(){

const {user}=useAuth();


return (

<div style={{
padding:"15px",
background:"#111",
borderRadius:"15px",
color:"#fff",
marginBottom:"10px"
}}>

<div>
👤 {user?.username || "Khách"}
</div>


<div>
🟡 Gold:
{user?.gold || 0}
</div>


<div>
💎 Diamond:
{user?.diamond || 0}
</div>


<div>
⭐ VIP:
{user?.vip || 0}
</div>


</div>

)

}


export default UserHeader;
