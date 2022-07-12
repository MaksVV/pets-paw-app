
import { Link, useLocation } from "react-router-dom";


const SidibarLink = ({image, to, label}) => {
    const location = useLocation();

    const active = () => {
        return location.pathname.includes(to);
    }

    return (
        <Link className={`sidebar-link ${active() ? "active" : ""}`} to={to}>
            <div className="sidebar-link-image-container">
                <img className="sidebar-link-image" src={image} alt={to}></img>
            </div>
            <div className="sidebar-link-label">{label}</div>
        </Link>
    );
}

export default SidibarLink;