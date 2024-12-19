import { use, useEffect } from "react";
import MagnifyingGlass from "../assets/blue-magnifying-glass.png";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    let timer;

    if(searchValue !== "") {
      timer = setTimeout(() => {
        axios
          .get(`${import.meta.env.VITE_SERVER_URL}/flipCards?title_like=${searchValue}`)
          .then((response) => {
            // console.log(response);
            setSearchResult(response.data);
          });
      }, 1000)
    } else {
      setSearchResult([])
    }

    return () => clearTimeout(timer);
  }, [searchValue]);


  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };



  return (
    <>
      <div className="search-container">
        <div className="search-bar-container">
          <button className="initial-config-btn" id="magnifying-glass-btn">
            <img
              id="magnifyingGlass-icon"
              src={MagnifyingGlass}
              alt="Magnifying Glass"
            />
          </button>
          <input
            id="search-input"
            type="text"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div id="search-results">
          {searchResult.map((eachResult) => {
            return(
              <Link to={`/details/${eachResult.id}/${eachResult.title}`} key={eachResult.id}>
                <p>{eachResult.title}</p>;
              </Link>
            ) 
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
