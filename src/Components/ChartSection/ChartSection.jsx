import React from 'react';
import './ChartSection.css';
import useFetchGetMethod from '../../hooks/useFetchGetMethod';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ChartSection() {

  const data = Array.from({ length: 100 }, (_, index) => ({
    x: index,
    y: Math.atan((index * Math.PI) / 50),
  }));

  // const [, monthSales] = useFetchGetMethod('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json');

  return (
    // <div>{monthSales[1].month}</div>
    <LineChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  )
}
