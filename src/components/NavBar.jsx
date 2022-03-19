import { NavLink } from "react-router-dom";
import CartWidget from "./cart/CartWidget";
import { CartContext } from "./context/CartProvider";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5">
            <NavLink className="navbar-brand" to={"/"}>NetShop</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/remeras"}>Remeras</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/buzos"}>Buzos</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/zapatillas"}>Zapatillas</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/pantalones"}>Pantalones</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
};

export default NavBar;