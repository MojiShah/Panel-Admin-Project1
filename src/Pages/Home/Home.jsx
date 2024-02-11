import React, { useEffect, useState } from 'react'
import './Home.css';
import Features from '../../Components/features/Features';
import ChartSection from '../../Components/ChartSection/ChartSection';
import useFetchGetMethod from '../../hooks/useFetchGetMethod';

export default function Home() {

  const [features, monthSales] = useFetchGetMethod('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json');

  console.log(features.splice(0, 1));

  return (
    <>
      <div className='featuresection'>
        {features.splice(0).map(feature => (
          <Features
            key={feature.month}
            month={feature.month}
            sales={feature.sales} />
        ))}
      </div>
      <ChartSection />
    </>
  )
}

