
import "./VotingPage.css";

import Navbar from '../navbar/Navbar';
import BackLink from '../back/BackLink';
import VotingImage from './voting-image/VotingImage';



const VotingPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <div className="voting">
                    <BackLink />
                    <VotingImage />
                </div>
            </div>
        </>
    );
}

export default VotingPage();