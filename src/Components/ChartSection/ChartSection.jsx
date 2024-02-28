import React, { useState } from 'react';
import './ChartSection.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function ChartSection(props) {


  // const [features, monthSales, id] = useFetchGetMethod('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json');



  return (
    <div className='chartSection'>
      <h3 className='chart-title'>{props.title}</h3>
      {/* {monthSales.map(monthSale =>
        <div key={monthSale[0]}>
          {monthSale[1].month}-{monthSale[1].sales}
        </div>
      )} */}
      <ResponsiveContainer width={'100%'} height={'1000'} aspect={7}>
        <LineChart data={props.data} >
          <XAxis dataKey='month' stroke='#000' domain={['auto', 'auto']} />
          <YAxis dataKey='sales' stroke='#555000' domain={[0, 4000]} />
          <Line type="monotone" dataKey='sales' stroke='#5550bd' />
          <Tooltip />
          {props.grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5" />}
        </LineChart>
      </ResponsiveContainer>

    </div>



  )
}
