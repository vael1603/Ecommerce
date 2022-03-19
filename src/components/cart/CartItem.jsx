import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const CartItem = (props) => {

    const {removeItem} = useContext(CartContext);

    console.log(props.product.id)
    return <>
        <div className="card bg-light mx-auto w-75">
            <div className="d-flex bg-light">
                <h4 className="my-auto">{props.product.title}</h4>
                <h4 className="my-auto m-auto">${props.product.price}</h4>
                <img className="rounded-circle m-2" width={90} src={props.product.pictureUrl} alt="Card image cap" />
                <p className="my-auto">x {props.product.quantity} unidades</p>
            </div>
            <div className="justify-content-end d-grid gap-2 d-md-flex">
                <button className="btn btn-danger w-25 mb-3" onClick={() => removeItem(props.product.id)}>
                    eliminar
            </button>

            </div>
        </div>
    </>
};

export default CartItem;