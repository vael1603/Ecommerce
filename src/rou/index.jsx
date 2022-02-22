import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/Items/ItemDetailContainer";
import ItemListContainer from "../components/Items/ItemListContainer";
import Pruebas from "../components/Pruebas";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/category/:id" element={<ItemDetailContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;