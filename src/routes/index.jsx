import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Checkout from "../components/Checkout";
import ItemDetailContainer from "../components/Items/ItemDetailContainer";
import ItemListContainer from "../components/Items/ItemListContainer";
import NavBar from "../components/NavBar";

const Rutas = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="container pt-3">
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Rutas;