import "./GalleryPage.css";

import Navbar from '../navbar/Navbar';
import BackLink from '../back/BackLink';

const GalleryPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <BackLink />
                <div className="gallery">
                    
                </div>
            </div>
        </>
    );
}

export default GalleryPage;