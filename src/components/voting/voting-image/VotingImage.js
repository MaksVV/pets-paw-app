import "./VotingImage.css";

import VotingButtons from "../voting-buttons/VotingButtons";
import cat from "./imeges/cat.png"

const VotingImage = ({ image }) => {
    return (
        <div className="voting-image-container">
            <img className="voting-image" src={cat} alt="cat" />
            <VotingButtons />
        </div>
    );
}

export default VotingImage;