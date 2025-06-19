import '../styles/navbar.css'
import logo from '../assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';
import {cardContext} from '../Store/StoreContext';
import React, {useContext} from 'react';
import cartImg from '../assets/images/cartImg.png';

function Navbar() {
    const {sideBar, setSideBar} = useContext(cardContext);

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
                    <div>
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
                            <p>0.4 TrackMate XE</p>
                            <p>$85.00</p>
                            <p>Color: Black</p>
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