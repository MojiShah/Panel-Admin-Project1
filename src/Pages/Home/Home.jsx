import React, { useEffect, useState } from 'react'
import './Home.css';
import Features from '../../Components/features/Features';
import ChartSection from '../../Components/ChartSection/ChartSection';
// import HomeUserTable from '../../Components/HomeUserTable/HomeUserTable';
import useGetMonthes from '../../hooks/useGetMonthes';
import UseGetUsersData from '../../hooks/UseGetUsersData';
import WidgetSmNewUsers from '../../Components/WidgetSmNewUsers/WidgetSmNewUsers';
import WidgetLgTransaction from '../../Components/WidgetLgTransaction/WidgetLgTransaction';

export default function Home() {

  const [features, monthSales, id] = useGetMonthes('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json');

  const oldUsers = UseGetUsersData('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json');

  const newUsers = UseGetUsersData('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json');


  


  // console.log(features.splice(0, 1));
  console.log('features', features);
  // console.log('monthSales', monthSales);
  // console.log('id', id);

  console.log('oldUsers',oldUsers);
  console.log('newUsers',newUsers);

  return (
    <div className='HomeSection'>

      <div className='featuresection'>
        {features.filter(feature => feature.month != 'Jul').map(feature => (
          <Features
            key={feature.month}
            month={feature.month}
            sales={feature.sales} />
        ))}
      </div>

      <ChartSection
        title='Moji Month Analytics'
        data={monthSales}
        dataKey={0.1 * 'sales'}
        grid
      />

      {/* <div className="container tables">
        <div className="table-old">
          <HomeUserTable />
        </div>
        <div className="table-new">
          <HomeUserTable />
        </div>
      </div> */}

      <div className="widgetcontainer">
        <WidgetSmNewUsers />
        <WidgetLgTransaction />
      </div>


    </div>
  )
}

