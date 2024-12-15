import MagnifyingGlass from "../assets/blue-magnifying-glass.png";

function SearchBar() {
  return (
    <>
      <div className="search-bar-container">
        <button className="initial-config-btn" id="magnifying-glass-btn">
          <img
            id="magnifyingGlass-icon"
            src={MagnifyingGlass}
            alt="Magnifying Glass"
          />
        </button>
        <input id="search-input" type="text" />
      </div>
    </>
  );
}

export default SearchBar;
