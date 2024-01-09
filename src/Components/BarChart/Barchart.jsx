import React from 'react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'


import './BarChart.scss'

const Barchart = ({title,color,dataKey,chartData}) => {
  return (
    <div className="BarchartContainer">

        <h1>{title}</h1>

        <div className="charts">
        <ResponsiveContainer width="100%" >
        <BarChart width={150} height={40} data={chartData}>
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>

        </div>



    </div>
  )
}

export default Barchart