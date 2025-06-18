import { createContext,/* useReducer,*/ useState } from "react";
export const cardContext = createContext()

const StoreContext = ({children}) => {
    const [sideBar, setSideBar] = useState(true);

    const [img, setImg] = useState(0);
    const [color1, setColor1] = useState(0);
    const [count, setCount] = useState(1);

    return( <cardContext.Provider value={{sideBar, setSideBar, img, setImg, color1, setColor1, count, setCount}}>  
                {children}
            </cardContext.Provider>
    );
}
export default StoreContext;    