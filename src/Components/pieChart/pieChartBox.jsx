

import React from 'react'
import './pieChartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

export const PieChartBox = () => {
  return (
   <div className="pieChartBox">

 <h1>Leads by source</h1>

 <div className="charts">


 <ResponsiveContainer width="100%" height="100%">

 <PieChart  >

 <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />


<Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>




    
        </PieChart>

        </ResponsiveContainer>
 </div>


<div className="devices">

   {data.map((item)=>(


<div key={item.name} className="device">

<div className="titleBox">
<div  className='circle' style={{backgroundColor:item.color}}></div>
<div className="title">{item.name}</div>
</div>


<div className="price">{item.value}</div>
</div>
   ))
   
  

              }
</div>
   </div>
  )
}
