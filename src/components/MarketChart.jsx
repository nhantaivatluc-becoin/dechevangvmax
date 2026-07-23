import "./MarketChart.css";

import { useGame } from "../store/GameStore";


function MiniLine({ data, color }) {

    if (!data || data.length < 2) {
        return null;
    }


    const max = Math.max(...data);
    const min = Math.min(...data);


    const points = data.map((value, index) => {

        const x = (index / (data.length - 1)) * 100;

        const y = 100 - (
            ((value - min) / ((max - min) || 1)) * 80
        );


        return `${x},${y}`;

    }).join(" ");



    return (
        <svg
            className="line-chart"
            viewBox="0 0 100 100"
        >

            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="3"
            />

        </svg>
    );

}




export default function MarketChart() {


    const {
        goldHistory = [],
        diamondHistory = []
    } = useGame();



    const goldUp =
        goldHistory.length > 1 &&
        goldHistory[goldHistory.length - 1] >=
        goldHistory[goldHistory.length - 2];



    const diamondUp =
        diamondHistory.length > 1 &&
        diamondHistory[diamondHistory.length - 1] >=
        diamondHistory[diamondHistory.length - 2];



    return (

        <div className="market-chart">


            <div className="market-card">

                <h3>🟡 GOLD MARKET</h3>

                <div className="animal-chart">
                    {goldUp ? "🐰" : "🐢"}
                </div>


                <div className="price-status">
                    {goldUp ? "📈 TĂNG GIÁ" : "📉 GIẢM GIÁ"}
                </div>


                <div className="graph">

                    <MiniLine
                        data={goldHistory}
                        color="#00ff66"
                    />

                </div>

            </div>




            <div className="market-card diamond-market">

                <h3>💎 DIAMOND MARKET</h3>


                <div className="animal-chart">
                    {diamondUp ? "🐸" : "🐌"}
                </div>


                <div className="price-status">
                    {diamondUp ? "📈 TĂNG" : "📉 GIẢM"}
                </div>


                <div className="graph">

                    <MiniLine
                        data={diamondHistory}
                        color="#00ffff"
                    />

                </div>


            </div>


        </div>

    );

}
