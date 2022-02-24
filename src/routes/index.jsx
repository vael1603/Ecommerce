import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/Items/ItemDetailContainer";
import ItemListContainer from "../components/Items/ItemListContainer";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;