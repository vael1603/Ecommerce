import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartIems, setCartItems] = useState(0);

    const agregar = () =>{
        setCartItems(cartIems + 1);
        alert('prueba');
    }

    return (
        <CartContext.Provider value={cartIems}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;