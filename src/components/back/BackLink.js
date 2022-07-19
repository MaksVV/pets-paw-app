import "./BackLink.css";

import { useNavigate, Link } from 'react-router-dom';

// const BackLink = ({ base, label}) => {
//     return (
//         <div className="back-link">
//             <Link className="back-link-image-wrapper" to={base}>
//                 <img className="back-link" src={back} alt="go back"></img>
//             </Link>
//             <div className="back-link-label">{label}</div>
//         </div>
//     );
// }
const BackLink = () => {
    const nav = useNavigate();
    const text = document.getElementsByClassName('sidebar-link-label').textContent;
    return (
        <div className="back-link">
            <div onClick={() => nav(-1)} className="back-link-image"></div>
            <div className="back-link-title"></div>
        </div>
        );
    }
export default BackLink;