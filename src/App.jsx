import './App.css'
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TrackmateXe from './pages/TrackmateXe.jsx';

function App() {

  return (
    <>
      {/* <Navbar/>
          <Home/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/tracmateShop' element={<TrackmateXe />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
