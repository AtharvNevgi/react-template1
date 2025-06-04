import './App.css'
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <Navbar/>
          <Home/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
