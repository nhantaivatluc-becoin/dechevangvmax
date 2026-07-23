import {useState} from "react";


export default function Exchange(){

const [gold,setGold]=useState(0);


return(

<div className="game-card">


<h1>💎 ĐỔI VÀNG</h1>


<div className="resource">

1.800.000 Gold
<br/>
=
0.1 Diamond
<br/>
=
25 VNĐ

</div>


<input

placeholder="Nhập Gold"

onChange={
e=>setGold(e.target.value)
}

/>


<div className="resource">

Nhận:

<br/>

💎 {(gold/1800000*0.1).toFixed(2)}

</div>


<button className="action-btn">

💎 XÁC NHẬN ĐỔI

</button>


</div>

)

}
