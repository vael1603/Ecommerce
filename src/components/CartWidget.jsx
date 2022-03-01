import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./context/CartProvider";

const CartWidget = () => {

    const {quantity} = useContext(CartContext);
    
    return (
        <div className="d-flex">
            <FaShoppingCart size={25} style={{ fill: 'grey' }} />
            <div className="mx-1 px-1 mt-1 text-light">
                <span>{quantity}</span>
            </div>
        </div>
    )
};

export default CartWidget;