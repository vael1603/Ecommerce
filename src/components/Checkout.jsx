import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart"
import { CartContext } from "./context/CartProvider";
import useFireStore from "./hooks/useFireStore";
import Loader from "./Loader";

const Checkout = () => {

    const { cartItems, total, clear } = useContext(CartContext);

    const { generateOrder, load } = useFireStore();

    let nothingInCart = true;
    if (cartItems.length === 0) {
        nothingInCart = true;
    } else {
        nothingInCart = false;
    }

    const [form, setForm] = useState(
        {
            buyer: {
                name: '',
                phone: '',
                email: ''
            },
            items: cartItems,
            date: new Date(),
            total: total
        }
    )

    const handleChange = (e) => {
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [e.target.name]: e.target.value
            }
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        generateOrder({ datos: form });
        clear();
    }

    return <>
        {load ? <Loader></Loader> :
            <div className="container mt-5">
                {!nothingInCart &&
                    <div className="row">
                        <Cart />
                        <div className="col-6 order-md-1 text-start">
                            <h4 className="mb-3">Datos de Factura</h4>
                            <form className="needs-validation" onSubmit={handleSubmit} noValidate="">
                                <div className="mb-3">
                                    <label>Nombre y Apellido</label>
                                    <input onChange={handleChange} value={form.buyer.name} className="form-control" name="name" placeholder="Juan Perez" />
                                    <div className="invalid-feedback"> Valid first name is required. </div>
                                </div>
                                <div className="mb-3">
                                    <label>Correo electronico</label>
                                    <input onChange={handleChange} type="email" value={form.buyer.email} className="form-control" name="email" placeholder="nombre@ejemplo.com" />
                                    <div className="invalid-feedback"> Por favor ingrese un email valido</div>
                                </div>
                                <div className="mb-3">
                                    <label>Telefono</label>
                                    <input onChange={handleChange} type="number" value={form.buyer.phone} className="form-control" name="phone" placeholder="11 2222 4444" />
                                </div>
                                <hr className="mb-4" />
                                <button disabled={!form.buyer.phone || !form.buyer.email || !form.buyer.name} className="btn btn-dark btn-lg btn-block" type="submit">Continuar compra</button>
                            </form>
                        </div>
                    </div>
                }
                {nothingInCart && <div><h5 className="card bg-light w-50 mx-auto p-4 mt-3">Tu carrtito esta vacio</h5>
                    <Link className="btn btn-dark w-25 mx-auto mt-2" to="/"> volver al inicio</Link></div>}
            </div>
        }
    </>
}

export default Checkout;