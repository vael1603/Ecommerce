import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import ItemCount from "./ItemCount"

const ItemDetail = (props) => {

    const [quantity, setQuantity] = useState(0);
    const [addCart, setAddCart] = useState(false);
    const {onCart} = useContext(CartContext);

    const changeQuantity = (num) => {
        setQuantity(num);
    }

    const changeAddCart = (bool) => {
        setAddCart(bool);
        onCart(props.details, quantity);
    }

    return <>
        <div className="card bg-light p-5">
            <div className="row">
                <div className="col-7 p-5 m-3 card">
                    <img className="card-img-top" src={props.details.pictureUrl} alt="Producto" />
                </div>
                <div className="col-4 card m-3 bg-dark text-white p-5">
                    <h3>{props.details.title}</h3>
                    <h2>${props.details.price}</h2>
                    { addCart != true && <ItemCount onSelect={changeQuantity} onFinish={changeAddCart} stock={props.details.stock}/>}
                    { addCart == true &&  
                        <div>
                            <Link to="/cart" className="btn btn-light m-2">Terminar Compra</Link>
                            <p>usted añadio {quantity} items al carrito</p>
                        </div>
                        }
                </div>
            </div>
        </div>
    </>
}

export default ItemDetail;