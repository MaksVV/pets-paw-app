
import "./VotingPage.css";

import Navbar from '../navbar/Navbar';
import BackLink from '../back/BackLink';
import VotingImage from "./voting-image/VotingImage";
import VotingAction from "./voting-action/VotingAction";



const VotingPage = () => {
    return (
        <>
            <div className="wrapper">
            <Navbar />
                <div className="voting">
                    <BackLink />
                    <VotingImage />
                    <VotingAction />
                </div>
            </div>
        </>
    );
}

export default VotingPage;