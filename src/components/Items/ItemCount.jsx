import { useState } from "react";

const ItemCount = (props) => {
    const [quantity, setQuantity] = useState(props.initial);
    const [stock, setStock] = useState(props.stock)

    const onAdd = () => {
        setQuantity(quantity+1);
    }

    const onSubstract = () => {
        setQuantity(quantity-1);
    }

    return <>
        <div className="card p-3 bg-light">
        <h5>Stock Disponible: {stock}</h5>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-secondary" disabled={quantity >= stock} onClick={onAdd} >+</button>
                </div>
                <input type="text" className="form-control text-center" value={quantity}/>
                <div className="input-group-append">
                    <button className="btn btn-secondary" disabled={quantity <= 0} onClick={onSubstract}>-</button>
                </div>
            </div>
            <button className="btn btn-dark">Añadir al carrito</button>
        </div>
    </>
};

export default ItemCount;