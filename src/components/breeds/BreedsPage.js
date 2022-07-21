import "./BreedsPage.css";

import Navbar from "../navbar/Navbar";
import BackLink from "../back/BackLink";
import BreedsImages from "./breeds-images/BreedsImages";

const BreedsPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <BackLink />
                {/* <BreedsImages /> */}
            </div>
        </>
    );
}
export default BreedsPage;