import "./Search.css";

const Search = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search for breeds by name" className="search-input" />
            <button className="search-button"></button>
        </div>
    );
}

export default Search;
