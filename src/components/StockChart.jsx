import {

AreaChart,

Area,

XAxis,

YAxis,

CartesianGrid,

Tooltip,

ResponsiveContainer

} from "recharts";



export default function StockChart({data=[]}){


return(


<div className="stock-chart-box">


<ResponsiveContainer

width="100%"

height="100%"

>


<AreaChart data={data}>


<CartesianGrid

stroke="#222"

/>



<XAxis

dataKey="time"

stroke="#888"

tick={{fontSize:12}}

/>




<YAxis

domain={["auto","auto"]}

stroke="#888"

/>





<Tooltip

formatter={(value)=>

[

"$"+Number(value).toFixed(2),

"Price"

]

}


/>







<Area

type="monotone"

dataKey="price"

stroke="#00ff99"

fill="#00ff9940"

strokeWidth={3}


/>



</AreaChart>



</ResponsiveContainer>



</div>



)


}
