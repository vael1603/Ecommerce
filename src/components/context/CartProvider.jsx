import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const onCart = (obj, numItems) =>{
        setCartItems(...cartItems, obj);
        
        setQuantity(quantity + numItems);
    }

    const clear = () => {
        setQuantity(0);
        setCartItems([]);
    }

    const removeItem = (itemId) => {
        if( isInCart(itemId)) {
            cartItems.filter((item) => item.id !== itemId);
        }
    }

    const isInCart = (id) => {
        if( cartItems.filter(item => item.id === id).length > 0) {
            return true;
        }   else {
            return false;
        }
    }

    return (
        <CartContext.Provider value={{cartItems, onCart, quantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;