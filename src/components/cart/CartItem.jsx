import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartItem = (props) => {

    const { removeItem } = useContext(CartContext);

    return <>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <img className="rounded-circle" width={50} src={props.product.pictureUrl} alt="Card cap" />
            <div>
                <h6 className="my-0">{props.product.title}</h6>
                <small className="text-muted">unidades: {props.product.quantity}</small>
            </div>
            <span className="text-muted d-block">${props.product.price}</span>
            <div>
            <button className="btn-close ml-auto"  onClick={() => removeItem(props.product.id)} aria-label="borrar"></button>
            </div>
        </li>
    </>
};

export default CartItem;