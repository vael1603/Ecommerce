import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/Items/ItemDetailContainer";
import ItemListContainer from "../components/Items/ItemListContainer";
import Pruebas from "../components/Pruebas";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;