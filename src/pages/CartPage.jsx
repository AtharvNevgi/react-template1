import '../styles/cartPage.css'
import {CardContext} from '../Store/StoreContext';
import React, {useContext} from 'react';
import cartImg from '../assets/images/cartImg.png';

function CartPage(){
    const {cart, removeFromCart, cartCount} = useContext(CardContext);
    return(
            <div className=" cartPageContainer">
                <div className="myCart">
                    <div className="heading">
                        <h2>My Cart</h2>
                    </div>
                    <div className="cartParent">
                        {cart.length === 0 ? (
                            <div className="emptyCartMsg">
                                <h3>Cart is empty</h3>
                                <a href="/tracmateShop"><p>Continue Browsing</p></a>
                            </div>
                        ) : (
                            cart.map((item, index) => (
                                <div className="product-details product-details-cartPage" key={index}>
                                    <div className="productLeft prductLeft-cartPage">
                                        <img src={cartImg} alt="" />
                                    </div>
                                    <div className="productRight">
                                        <div className="innerRight innerRight-cartPage">
                                            <p>{item.name}</p>
                                            <p>{`₹${item.price}.00`}</p>
                                            <p>Color: {item.color}</p>
                                        </div>
                                        <div className=" innerLeft-cartPage">
                                            <div className="quantityCounter quantityCounterNav quantityCounter-cartPage" style={{ width:'80px', height:'30px'}}>
                                                {/* <button style={{background:'none'}} onClick={decrement}  className='decrement cart-dec-button'><i style={{color:'rgb(204, 185, 185)',fontSize:'20px'}} className={`bi bi-dash ${cartCount <= 1 ? 'fade' : 'nofade'}`}></i></button> */}
                                                <span style={{color:'white', fontSize:'14px', marginLeft:'5px'}}>Quantity</span>
                                                <input style={{background:'none', color:'white'}} type="text"  value={item.quantity} />
                                                {/* <button style={{background:'none'}} onClick={increment} className='increment'><i style={{fontSize:'20px',color:'rgb(204, 185, 185)'}} className="bi bi-plus"></i></button> */}
                                            </div>
                                            <p>{`₹${/*trackMateXeAmount*/item.price * item.quantity}.00`}</p>
                                            <button onClick={() => removeFromCart(index)}>
                                                <i class="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className={cart.length === 0 ? "orderSummary1" : "orderSummary"}>
                            <div className="heading2">
                                <h2>Order Summary</h2>
                            </div>
                            <div className="middle2">

                            </div>
                            <div className="end">
                                <div className="total">
                                    <h3>Total</h3>
                                    <p>₹{`${cartCount * 85}.00`}</p>
                                </div>
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartPage