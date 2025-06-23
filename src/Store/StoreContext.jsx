import { createContext,/* useReducer,*/ useState } from "react";
export const cardContext = createContext()

const StoreContext = ({children}) => {
    const [sideBar, setSideBar] = useState(true);

    const [img, setImg] = useState(0);
    const [color1, setColor1] = useState(0);
    const [trackMateXeCount, setTrackMateXeCount] = useState(1)
    
    console.log(trackMateXeCount)
    // Cart State
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(trackMateXeCount);
    let amount = 85;
    let trackMateXeAmount = amount * cartCount;

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    }
    

    return( <cardContext.Provider value={{sideBar, setSideBar, img, setImg, color1, setColor1, cartCount, setCartCount, trackMateXeCount, setTrackMateXeCount, trackMateXeAmount, cart, setCart, addToCart}}>  
                {children}
            </cardContext.Provider>
    );
}
export default StoreContext;    