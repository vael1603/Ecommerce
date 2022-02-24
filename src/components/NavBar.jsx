import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5">
            <a className="navbar-brand" href="/">NetShop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/category/remeras">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/buzos">Buzos</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/category/zapatillas">Zapatillas</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/category/pantalones">Pantalones</a>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
        )
};

export default NavBar;