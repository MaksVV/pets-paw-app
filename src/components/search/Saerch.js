import "./Search.css";

import search from "./search.svg";

const Search = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search for breeds by name" className="search-input" />
            <button className="search-button">
                <img src={search} alt="search" className="search-button-image" />
            </button>
        </div>
    );
}

export default Search;
