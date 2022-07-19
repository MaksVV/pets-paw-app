import "./RefreshLink.css";

import refresh from "./refresh.svg";

const RefreshLink = ({ refreshFunction }) => {
    return (
        <button className="refresh-link" onClick={refreshFunction}>
            <img className="refresh-link-image" src={refresh} alt="refresh" />
        </button>
    )
}

export default RefreshLink;