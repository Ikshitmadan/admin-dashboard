import React from 'react'
import  './home.scss'
import TopBox from '../../Components/TopBox/TopBox'

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import ChartBox from '../../Components/chartBox/ChartBox';
import Barchart from '../../Components/BarChart/Barchart';

import { PieChartBox } from '../../Components/pieChart/pieChartBox';
import { BigChartBox } from '../../Components/bigChartBox/bigChartBox';
const home = () => {
  return (
<div className="home">

<div className="box box1">
  
  <TopBox/>
</div>
<div className="box box2">


  <ChartBox {...chartBoxUser} />
</div>
<div className="box box3">
<ChartBox {...chartBoxProduct} />

</div>
<div className="box  box4">

  <PieChartBox/>
</div>
<div className="box box5">

<ChartBox {...chartBoxConversion} />
</div>
<div className="box  box6" >
<ChartBox {...chartBoxRevenue} />

</div>
<div className="box box7">

  <BigChartBox/>
</div>
<div className="box box8">
  <Barchart {...barChartBoxRevenue}/>
</div>
<div className="box box9" >

<Barchart {...barChartBoxVisit}/>
</div>
</div>
  )
}

export default home