import "./BreedsLayout.css";

import BreedsImages from "../breeds-images/BreedsImages";

const BreebsLayout = () => {
    return (
        <div className="layout-wrapper">
            <div className="layout-container">
                <BreedsImages />
            </div>
        </div>
    );
}

export default BreebsLayout;