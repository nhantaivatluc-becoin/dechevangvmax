import {

LineChart,

Line,

ResponsiveContainer

} from "recharts";



export default function MiniStockChart({data=[],up=true}){



return(


<div className="mini-chart">


<ResponsiveContainer

width="100%"

height="100%"

>


<LineChart data={data}>


<Line

type="monotone"

dataKey="price"

stroke={

up

?

"#00ff88"

:

"#ff3333"

}

strokeWidth={3}

dot={false}


/>



</LineChart>


</ResponsiveContainer>



</div>


)


}
