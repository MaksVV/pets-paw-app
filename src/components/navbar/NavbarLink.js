import { Link, useLocation } from "react-router-dom";

const NavbarLink = ({ image, to, alt }) => {
    const location = useLocation();

    const active = () => {
        return location.pathname.includes(to);
    }

    return (
        <Link className={`navbar-link ${active() ? "active" : ""}`} to={to}>
            <img className="navbar-link-image" src={image} alt={alt}></img>
        </Link>
    );
}

export default NavbarLink;