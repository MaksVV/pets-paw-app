import "./BreedsPage.css";

import Navbar from "../navbar/Navbar";
import BackLink from "../back/BackLink";
import BreedsLayout from "./breeds-layout/BreedsLayout";

const BreedsPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <div className="breeds">
                    <BackLink />
                    <BreedsLayout />
                </div>
            </div>
        </>
    );
}
export default BreedsPage;