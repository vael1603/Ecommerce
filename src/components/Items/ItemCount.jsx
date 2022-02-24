import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onSelect, onFinish}) => {
    const [quantity, setQuantity] = useState(0);

    const onAdd = () => {
        setQuantity(quantity+1);
        onSelect(quantity+1);
    }

    const onSubstract = () => {
        setQuantity(quantity-1);
        onSelect(quantity-1);
    }

    return <>
        <div className="card p-3 bg-light">
        <p className="text-end text-dark"><strong>Stock Disponible:</strong> {stock}</p>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-secondary" disabled={quantity >= stock} onClick={onAdd} >+</button>
                </div>
                <input readOnly className="form-control text-center" value={quantity}/>
                <div className="input-group-append">
                    <button className="btn btn-secondary" disabled={quantity <= 0} onClick={onSubstract}>-</button>
                </div>
            </div>
            <button onClick={() => onFinish(true)} className="btn btn-dark">Añadir al carrito</button>
        </div>
    </>
};

export default ItemCount;