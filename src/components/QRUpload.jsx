import "./QRUpload.css";

import {
useState
} from "react";



export default function QRUpload({onChange}){


const [preview,setPreview]=useState("");




const handleUpload=(e)=>{


const file=e.target.files[0];


if(!file) return;



const url=

URL.createObjectURL(file);



setPreview(url);



if(onChange){

onChange(file);

}



};





return(


<div className="qr-upload">



<h3>
📷 QR NGÂN HÀNG
</h3>




<label className="qr-box">


{preview ? (


<img

src={preview}

alt="QR ngân hàng"

/>


):(


<span>

+

<br/>

TẢI ẢNH QR

</span>


)}



<input

type="file"

accept="image/*"

onChange={handleUpload}

/>


</label>




<p>

✔ Có thể tải QR ngân hàng

<br/>

✔ Kiểm tra trước khi gửi rút tiền

</p>



</div>


)


}
