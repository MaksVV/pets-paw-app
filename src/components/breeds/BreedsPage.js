import "./BreedsPage.css";

import Navbar from "../navbar/Navbar";
import BackLink from "../back/BackLink";

const BreedsPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <BackLink text={'Breeds'}/>
                {/* <PageHeader namePage={'Breeds'} /> */}
                {/* <ImagesLayout picturesArray={breeds}/> */}
            </div>
        </>
    );
}
export default BreedsPage;