import home from './home.png';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="wrapper">
            <div className="home">
                <img src={home} alt="girl and cat" className="home-image"></img>
                <div className="home-background"></div>
            </div>
        </div>
    );
}

export default HomePage;