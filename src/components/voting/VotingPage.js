
import "./VotingPage.css";

import Navbar from '../navbar/Navbar';
import BackLink from '../back/BackLink';



const VotingPage = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <BackLink />
                <div className="voting">
                    
                </div>
            </div>
        </>
    );
}

export default VotingPage();