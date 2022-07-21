import "./VotingAction.css";

const VotingAction = () => {
    return (
        <ul className='voting-action'>
            <li>
                <div className='time'>16:35</div>
                <div className='action'>Image ID: <span>fQSunHvl8</span> was added to Favourites</div>
                <div className='logo favorite'></div>
            </li>
            <li>
                <div className='time'>16:36</div>
                <div className='action'>Image ID: <span>HJd0XecNX</span> was added to Likes</div>
                <div className='logo like'></div>
            </li>
            <li>
                <div className='time'>18:21</div>
                <div className='action'>Image ID: <span>BbMFS3bU</span> was added to Dislikes</div>
                <div className='logo dislike'></div>
            </li>
            <li>
                <div className='time'>12:57</div>
                <div className='action'>Image ID: <span>fQSunHvl8</span> was added to Favourites</div>
                <div className='logo favorite'></div>
            </li>
        </ul>
    );
}

export default VotingAction;