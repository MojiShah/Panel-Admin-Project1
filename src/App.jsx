import React from 'react';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Topbar from './Components/topBar/Topbar';
import SideBar from './Components/sideBar/SideBar';


function App() {

  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  )
}

export default App
