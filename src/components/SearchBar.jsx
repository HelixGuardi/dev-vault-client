import MagnifyingGlass from "../assets/blue-magnifying-glass.png"

function SearchBar() {

    return(
        <>
        <div className="search-bar-container">
            <img id="magnifyingGlass-icon" src={MagnifyingGlass} alt="Magnifying Glass" />
            <input id="search-input" type="text" />
        </div>
        </>
    )
}

export default SearchBar;