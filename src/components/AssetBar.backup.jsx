import "./AssetBar.css";

import {
useUser
} from "../context/UserContext";



export default function AssetBar(){


const {

user

}=useUser();




return(


<div className="asset-bar">


<div className="asset gold">


🪙

<span>

{Number(user?.gold || 0).toLocaleString()}

</span>


</div>




<div className="asset diamond">


💎

<span>

{user?.diamond || 0}

</span>


</div>




<div className="asset vnd">


🇻🇳

<span>

{Number(user?.vnd || 0).toLocaleString()}

đ

</span>


</div>



</div>


)


}
