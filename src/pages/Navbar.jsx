import '../styles/navbar.css'
import logo from '../assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import {cardContext} from '../Store/StoreContext';
import React, {useContext} from 'react';
import cartImg from '../assets/images/cartImg.png';

function Navbar() {
    const {sideBar, setSideBar, count, setCount} = useContext(cardContext);

    const handleSideBar = () => {
        if (sideBar) {
            setSideBar(false);
        }
        else {
            setSideBar(true)
        }
    }
    const closeSideBar = () => {
        setSideBar(true)
    }

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count <= 1) {
            setCount(count);
        }
        else {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className={`navbar ${sideBar ? '' : 'navbar-width-change'}`}>
                <div className="nav-left">

                    <a href='/'><img className='logo' src={logo} alt="" /></a>
                    <a href="/">
                        <h1>TrackMate</h1>
                    </a>
                </div>
                <div className="nav-right">
                    <NavLink to="/"><i className="bi bi-person-circle"></i></NavLink>
                    <NavLink to="/"><h3 className='login'>Log In</h3></NavLink>
                    <i className="bi bi-bag-fill" onClick={handleSideBar}></i>
                    <NavLink to="/tracmateShop"><button className='buyNow'>Buy Now</button></NavLink>
                </div>
            </div>
            <div className={`sideBar ${sideBar ? '' : 'sideBar1'}`}>
                <div className="sideBarHead">
                    <div className='cartHead'>
                        <h3>Cart</h3><p>(0 items)</p>
                    </div>
                    <button className='close' onClick={closeSideBar}><i className="bi bi-x-lg"></i></button>
                </div>
                <div className="cartItems">
                    <div className="product-details">
                        <div className="productLeft">
                            <img src={cartImg} alt="" />
                        </div>
                        <div className="productRight">
                            <div className="innerRight">
                                <p>0.4 TrackMate XE</p>
                                <p>$85.00</p>
                                <p>Color: Black</p>
                                <div className="quantityCounter" style={{border:'1px solid white', width:'80px', height:'30px'}}>
                                    <button style={{background:'none'}} onClick={decrement}  className='decrement cart-dec-button'><i style={{color:'rgb(204, 185, 185)',fontSize:'20px'}} className={`bi bi-dash ${count <= 1 ? 'fade' : 'nofade'}`}></i></button>
                                    <input style={{background:'none', color:'white'}} type="text"  value={count} />
                                    <button style={{background:'none'}} onClick={increment} className='increment'><i style={{fontSize:'20px',color:'rgb(204, 185, 185)'}} className="bi bi-plus"></i></button>
                                </div>
                            </div>
                            <div className="innerLeft">
                                <button><i class="bi bi-trash3"></i></button>
                                <p>$85.00</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="checkOut">

                </div>
                {/* <p className='emptyMsg'>Your cart is empty.</p> */}
            </div>
        </>
    );
}
export default Navbar