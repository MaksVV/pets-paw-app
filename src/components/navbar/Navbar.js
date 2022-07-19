import "./Navbar.css";

import Search from "../search/Saerch";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
        <div className="navbar">
            <Search />
            <NavbarLinks />
        </div>
    );
}

export default Navbar;