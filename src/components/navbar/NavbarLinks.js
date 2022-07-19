import NavbarLink from "./NavbarLink";

import likes from "./images/likes.svg";
import favourites from "./images/favourites.svg";
import dislikes from "./images/dislikes.svg";

const NavbarLinks = () => {
    return (
        <div className="navbar-links">
            <NavbarLink image={likes} to="/voting/likes" alt="likes" />
            <NavbarLink image={favourites} to="/voting/favourites" alt="favourites" />
            <NavbarLink image={dislikes} to="/voting/dislikes" alt="dislikes" />
        </div>
    );
}

export default NavbarLinks;