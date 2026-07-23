import "./Settings.css";


import {
useState
} from "react";





export default function Settings(){



const [music,setMusic]=useState(

localStorage.getItem("music")!=="off"

);



const [effect,setEffect]=useState(

localStorage.getItem("effect")!=="off"

);



const [theme,setTheme]=useState(

localStorage.getItem("theme")||"gold"

);






function toggleMusic(){



const value=!music;


setMusic(value);


localStorage.setItem(

"music",

value?"on":"off"

);



}





function toggleEffect(){



const value=!effect;


setEffect(value);


localStorage.setItem(

"effect",

value?"on":"off"

);



}







function changeTheme(e){



setTheme(e.target.value);


localStorage.setItem(

"theme",

e.target.value

);



}







return(



<div className="settings-page">





<h1>

⚙️ CÀI ĐẶT HỆ THỐNG

</h1>








<div className="setting-card">



<h2>

🎵 Âm thanh

</h2>



<button

onClick={toggleMusic}

>


{

music

?

"🔊 Đang bật"

:

"🔇 Đã tắt"

}


</button>



</div>







<div className="setting-card">


<h2>

✨ Hiệu ứng

</h2>



<button

onClick={toggleEffect}

>


{

effect

?

"🌟 Hiệu ứng ON"

:

"❌ Hiệu ứng OFF"

}


</button>



</div>








<div className="setting-card">



<h2>

🎨 Giao diện

</h2>




<select

value={theme}

onChange={changeTheme}

>



<option value="gold">

🟡 Gold VIP

</option>



<option value="dark">

⚫ Dark

</option>



<option value="cyber">

🔵 Cyber Neon

</option>



</select>




</div>







<div className="setting-card">


<h2>

📱 Tài khoản

</h2>


<p>

Telegram Mini App

</p>


<p>

DE CHE VANG MAX

</p>



</div>






</div>


)



}
