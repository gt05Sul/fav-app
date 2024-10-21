import { Link } from "react-router-dom";

export const Header = () => {
    return ( 
        <header>
            <Link className="logo" to="/">Geracao Bet Store</Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link>
        </header>
     );
}