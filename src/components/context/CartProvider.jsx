import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    let [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState();
    let [total, setTotal] = useState();

    const onCart = async (obj, numItems) => {
        if (quantity !== undefined) {
            setQuantity(quantity + numItems);
        } else {
            setQuantity(numItems);
        }
        if (isInCart(obj.id)) {
            const item = await findInCart(obj.id);
            numItems = await numItems + item.quantity;
            removeItem(obj.id);
        }
        obj.quantity = await numItems;
        cartItems.push(await obj);
        getTotal(cartItems);
    }


    const clear = () => {
        setQuantity(0);
        setCartItems([]);
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            setCartItems(cartItems.filter((item) => item.id !== itemId));
            let item = cartItems.find((item) => item.id === itemId);
            setQuantity(quantity - item.quantity);
        }
    }

    const isInCart = (id) => {
        if (cartItems.filter(item => item.id === id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    const findInCart = (id) => {
        return cartItems.find((item) => item.id === id)
    }

    const getTotal = (items) => {
        let totalPrice = 0;
        items = items.map(item => {
            totalPrice = multiplyPrice(item) + totalPrice
        });
        setTotal(totalPrice);
    }

    const multiplyPrice = (obj) => {
        return obj.quantity * obj.price;
    }

    useEffect(() => {
        getTotal(cartItems);
    }, [cartItems, getTotal]);

    return (
        <CartContext.Provider value={{ cartItems, onCart, quantity, removeItem, total, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;