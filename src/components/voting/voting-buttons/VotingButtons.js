import "./VotingButtons.css";

import like from "./images/like.svg";
import favourite from "./images/favourite.svg";
import dislike from "./images/dislike.svg";

const VotingButtons = () => {
    return (
        <div className="voting-buttons-container">
            <button className="voting-button green">
                <img src={like} alt='like'></img>
            </button>
            <button className="voting-button red">
                <img src={favourite} alt='favourite'></img>
            </button>
            <button className="voting-button yellow">
                <img src={dislike} alt='dislike'></img>
            </button>
        </div>
    );
}

export default VotingButtons;