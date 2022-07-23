import "./BreedsImages.css";

import img from "./images/Savannah.png";
import img1 from "./images/Bengal.png";
import img2 from "./images/Kartäuser.png";
import img3 from "./images/Maycun.png";
import img4 from "./images/Siamskaya.png";
import img5 from "./images/Norwen.png";
import img6 from "./images/Turkish_Angora.png";
import img7 from "./images/Bombay.png";
import img8 from "./images/British_Longhair.png";
import img9 from "./images/Toyger.png";

const BreedsImages = () => {
    return (
        <> 
            <div className="images" >
                <img class="image" src={img} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Savannah</p>
                </div>
            </div>
            <div className="images" >
                <img class="image" src={img1} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Bengal</p>
                </div>
            </div>
            <div className="images" >
                <img class="image" src={img2} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Kartauser</p>
                </div>
            </div>
            <div className="images" >
                <img class="image" src={img3} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Maycun</p>
                </div>
            </div>    
            <div className="images" >
                <img class="image" src={img4} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Siamskaya</p>
                </div>
            </div>
            <div className="images" >
                <img class="image" src={img5} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Norwegian</p>
                </div>
            </div>    
            <div className="images" >
                <img class="image" src={img6} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Turkish_Angora</p>
                </div>
            </div>
            <div className="images" >
                <img class="image" src={img7} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Bombey</p>
                </div>
            </div>    
            <div className="images" >
                <img class="image" src={img8} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">British</p>
                </div>
            </div>   
            <div className="images" >
                <img class="image" src={img9} alt="cat" />
                <div className="imageHover">
                    <p className="textHover">Toyger</p>
                </div>
            </div>   
        </>
    );
}

export default BreedsImages;