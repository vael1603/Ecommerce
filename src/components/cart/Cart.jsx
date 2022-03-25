import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

const Cart = () => {

    const { cartItems, total } = useContext(CartContext);

    return <>
        <div className="col-md-4 mx-auto order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Tu carrito</span>
                <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3 sticky-top">
                {
                    cartItems.map(item =>
                        <CartItem key={item.id} product={item} />
                    )
                }
                <li className="list-group-item d-flex justify-content-between  bg-light">
                    <span>Total: </span>
                    <strong>$ {total}</strong>
                </li>
            </ul>
        </div>
    </>
};

export default Cart;