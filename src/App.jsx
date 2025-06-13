import './App.css'
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TrackmateXe from './pages/TrackmateXe.jsx';
import React, {useState} from 'react';

function App() {
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      {/* <Navbar/>
          <Home/> */}
      <BrowserRouter>
        <Navbar sideBar={sideBar} setSideBar={setSideBar}/>
        <Routes>
          <Route path="/" element={<Home sideBar={sideBar} setSideBar={setSideBar}/>} />
          <Route path='/tracmateShop' element={<TrackmateXe sideBar={sideBar} setSideBar={setSideBar}/>}/>
        </Routes>
        <Footer sideBar={sideBar} setSideBar={setSideBar}/>
      </BrowserRouter>

    </>
  )
}

export default App
