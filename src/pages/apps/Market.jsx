import React from "react";
import "./AppPages.css";


export default function Market(){



const market=[


"🇺🇸 Mỹ",

"🇻🇳 Việt Nam",

"🇯🇵 Nhật Bản",

"🇬🇧 Anh",

"🇩🇪 Đức",

"🇰🇷 Hàn Quốc",

"🇨🇳 Trung Quốc"



];




return(


<div className="stock-page">



<h1>

🌎 THỊ TRƯỜNG

</h1>




<div className="market-list">


{

market.map((m,i)=>(


<div

className="stock-card"

key={i}

>


<h2>

{m}

</h2>


<p>

Đang cập nhật dữ liệu realtime

</p>



</div>


))


}



</div>





</div>



)


}

