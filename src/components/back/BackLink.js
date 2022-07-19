import "./BackLink.css";

import back from "./back.svg";

import { Link } from "react-router-dom";

import RefreshLink from "../refresh/RefreshLink"

const BackLink = ({ base, label, refresh, refreshFunction }) => {
    return (
        <div className="back-link">
            <Link className="back-link-image-wrapper" to={base}>
                <img className="back-link-image" src={back} alt="go back"></img>
            </Link>
            <div className="back-link-label">{label}</div>
            {refresh && <RefreshLink refreshFunction={refreshFunction} />}
        </div>
    );
}

export default BackLink;