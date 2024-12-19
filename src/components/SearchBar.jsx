import { use, useEffect } from "react";
import MagnifyingGlass from "../assets/blue-magnifying-glass.png";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [techResults, setTechResults] = useState([]);

  useEffect(() => {
    let timer;

    if(searchValue !== "") {
      timer = setTimeout(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/flipCards?title_like=${searchValue}`)
        .then((response) => {
          // console.log(response);
          return setSearchResult(response.data);
        }).then(() => {
            axios.get(`${import.meta.env.VITE_SERVER_URL}/technologies?name_like=${searchValue}`)
            .then((response) => {
              // console.log(response);
              setTechResults(response.data);
            })
        })
      }, 1000)

    } else {
      setSearchResult([])
      setTechResults([])
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
          {techResults.map((eachTech) => {
            return(
              <Link to={`/infoTech/${eachTech.id}/${eachTech.name}`} key={eachTech.id}>
                <p className="search-result-line">{eachTech.name}</p>
              </Link>
            )
          })}
          {searchResult.map((eachResult) => {
            return(
              <Link to={`/details/${eachResult.id}/${eachResult.title}`} key={eachResult.id}>
                <p className="search-result-line">{eachResult.title}</p>
              </Link>
            ) 
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
