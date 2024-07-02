// import React from 'react'

import { TopBox } from "../../Component/TopBox/TopBox"
import { BarChartBox } from "../../Component/barChartBox/BarChartBox";
import { BigChartBox } from "../../Component/bigChartBox/BigChartBox";
import ChartBox from "../../Component/chartBox/ChartBox";
import { PieChartBox } from "../../Component/pieCharBox/PieChartBox";
import { chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion, barChartBoxVisit , barChartBoxRevenue } from '../../data';
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2">
         <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3">
      <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4">
      <PieChartBox/>
      </div>
      <div className="box box5">
      <ChartBox {...chartBoxConversion}/>
      </div>
      <div className="box box6">
      <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="box box7">
        <BigChartBox/>
      </div>
      <div className="box box8">
      <BarChartBox {...barChartBoxVisit }/>
      </div>
      <div className="box box9">
       <BarChartBox {...barChartBoxRevenue}/>
      </div>
    </div>
  )
}
