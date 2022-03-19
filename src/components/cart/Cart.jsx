import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    const nothingInCart = () => {
        if (cartItems.length == 0){
            return true
        } else {
            return false
        }
    }

    return <>
    <h4 className="text-start mt-3">Tu Carrito:</h4>
    <div className="row ">
        { cartItems.map(item => <CartItem product={item}/> )}
        { nothingInCart() && <div><h5 className="card bg-light w-50 mx-auto p-4 mt-3">Tu carrtito esta vacio</h5>
        <Link className="btn btn-dark w-25 mx-auto" to="/"> volver al inicio</Link></div>}
    </div>
    </>
};

export default Cart;