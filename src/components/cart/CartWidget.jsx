import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const CartWidget = () => {

    const { quantity } = useContext(CartContext);

    return (
        <>
        {quantity >= 1 && <div className="d-flex">
            <Link to={"/cart"}>
                <FaShoppingCart size={25} style={{ fill: 'grey' }} />
            </Link>
                <div className="mx-1 px-1 mt-1 text-light">
                    <span>{quantity}</span>
                </div>
        </div>}
        </>
    )
};

export default CartWidget;