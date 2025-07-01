import { createContext,/* useReducer,*/ useState, useEffect } from "react";
export const cardContext = createContext()

const StoreContext = ({children}) => {
    const [sideBar, setSideBar] = useState(true);

    const [img, setImg] = useState(0);
    const [color1, setColor1] = useState(0);
    const [trackMateXeCount, setTrackMateXeCount] = useState(1)
    
    // console.log(trackMateXeCount)
    // Cart State
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    let amount = 85;
    let trackMateXeAmount = amount * cartCount;

    useEffect(()=> {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalCount);
    }, [cart]);

    const addToCart = (item) => {

        setCart(prevCart => {
        // Check if item with same color exists
        const existingIndex = prevCart.findIndex(
            cartItem => cartItem.color === item.color
        );
        if (existingIndex !== -1) {
            // If found, update quantity
            const updatedCart = [...prevCart];
            updatedCart[existingIndex] = {
                ...updatedCart[existingIndex],
                quantity: updatedCart[existingIndex].quantity + item.quantity
            };
            return updatedCart;
        } else {
            // If not found, add new item
            return [...prevCart, item];
        }
    });
    }

    return( <cardContext.Provider value={{sideBar, setSideBar, img, setImg, color1, setColor1, cartCount, setCartCount, trackMateXeCount, setTrackMateXeCount, trackMateXeAmount, cart, setCart, addToCart}}>  
                {children}
            </cardContext.Provider>
    );
}
export default StoreContext;    