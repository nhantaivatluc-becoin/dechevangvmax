import "./MarketDetail.css";

import {
  useEffect,
  useState
} from "react";


import {
  useLocation,
  useNavigate
} from "react-router-dom";


import {
  useWallet
} from "../context/WalletContext";



export default function MarketDetail(){


  const location = useLocation();

  const navigate = useNavigate();


  const {
    buyStock
  } = useWallet();




  const stock = location.state || {

    name:"NVIDIA Corporation",

    code:"NVDA",

    country:"USA",

    sector:"Technology",

    price:180,

    change:0

  };





  const [price,setPrice] = useState(
    Number(stock.price)
  );


  const [change,setChange] = useState(
    Number(stock.change || 0)
  );


  const [quantity,setQuantity] = useState(1);



  const [history,setHistory] = useState([
    120,
    140,
    150,
    165,
    155,
    180
  ]);






  useEffect(()=>{


    const timer = setInterval(()=>{


      const move =
      Number(
        ((Math.random()-0.5)*5).toFixed(2)
      );


      setPrice(old=>

        Number(
          (old + move).toFixed(2)
        )

      );


      setChange(move);



      setHistory(old=>[

        ...old.slice(-10),

        price

      ]);



    },3000);



    return()=>clearInterval(timer);



  },[price]);









  const total =

  (

    price * quantity

  ).toFixed(2);








  function handleBuy(){



    const result = buyStock(

      {

        ...stock,

        price

      },

      quantity

    );



    if(result){


      alert(
        "✅ Mua cổ phiếu thành công"
      );


    }else{


      alert(
        "❌ Không đủ VNĐ trong ví"
      );


    }


  }









  return(


    <div className="market-detail">



      <button

      className="back-btn"

      onClick={()=>navigate(-1)}

      >

        ⬅ Quay lại

      </button>





      <div className="market-header">


        <h1>

          📈 {stock.name}

        </h1>



        <h3>

          {stock.code}

          {" - "}

          🌎 {stock.country}

        </h3>



        <p>

          🏢 {stock.sector}

        </p>



      </div>







      <div className="price-box">


        <h2>

          ${price}

        </h2>


        <span

        className={

          change >= 0

          ?

          "profit"

          :

          "loss"

        }

        >

          {change >=0 ? "▲":"▼"}

          {change}%

        </span>



      </div>









      <div className="chart-box">


        {

          history.map((item,index)=>(


            <div

            key={index}

            className="chart-bar"

            style={{

              height:

              Math.max(

                40,

                item

              )+"px"

            }}

            >


            </div>



          ))

        }



      </div>









      <div className="buy-box">


        <h2>

          🛒 Mua {stock.code}

        </h2>




        <p>

          Giá hiện tại:

          <b>

          ${price}

          </b>

        </p>





        <input

        type="number"

        min="1"

        value={quantity}

        onChange={e=>

          setQuantity(

            Number(e.target.value)

          )

        }

        />





        <p>

          Tổng tiền:

          <b>

          ${total}

          </b>

        </p>







        <button

        className="buy-btn"

        onClick={handleBuy}

        >

          🟢 XÁC NHẬN MUA

        </button>



      </div>








      <div className="company-info">


        <h2>

          🏦 Thông tin công ty

        </h2>



        <p>

          Tên:

          {stock.name}

        </p>



        <p>

          Mã:

          {stock.code}

        </p>



        <p>

          Quốc gia:

          {stock.country}

        </p>



        <p>

          Ngành:

          {stock.sector}

        </p>



      </div>





    </div>


  );


}
