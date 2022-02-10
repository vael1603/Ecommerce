import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="bg-light p-2 rounded-circle">
            <FaShoppingCart size={25} style={{ fill: 'grey' }} />
        </div>
    )
};

export default CartWidget;