import './App.css'
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import TrackmateXe from './pages/TrackmateXe.jsx';
import StoreContext from './Store/StoreContext';
import CartPage from './pages/CartPage.jsx';

function App() {
  // const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <StoreContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/tracmateShop' element={<TrackmateXe />}/>
            <Route path='/tracmateShop/cart-page' element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StoreContext>
    </>
  )
}

export default App
