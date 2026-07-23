export default function Friends(){


const link="https://t.me/dechevang_bot?start=123456";


function copy(){

navigator.clipboard.writeText(link);

alert("Đã copy link mời");

}



return (

<div>


<h2>👥 Mời Bạn Bè</h2>


<p>

Nhận thưởng:

</p>


<ul>

<li>F1 +1000 Gold</li>

<li>F2 +500 Diamond</li>

</ul>


<input value={link} readOnly/>


<button onClick={copy}>

📋 Copy Link

</button>


</div>

)


}
