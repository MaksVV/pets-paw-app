import home from './home.png';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="home">
            <img src={home} alt="girl and cat" className="home-image"></img>
        </div>
    );
}

export default HomePage;