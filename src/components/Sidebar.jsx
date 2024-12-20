import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function Sidebar(props) {
  const filteredTechs = props.filteredTechs;
  const setFilteredTechs = props.setFilteredTechs;

  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/technologies`)
      .then((response) => {
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // loading...
  if (technologies.length === 0) {
    return (
      <div className="loading-container">
        <PacmanLoader width={"100%"} color="#FFD166" />
      </div>
    );
  }

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      return setFilteredTechs([...filteredTechs, event.target.value]); // añadelo
    } else {
      return setFilteredTechs((prevFilteredCards) =>
        prevFilteredCards.filter((filter) => filter !== event.target.value)
      ); // remuevelo (filter out)
    }
  };

  return (
    <>
      <section className="side-bar-container">
        <div className="filter-section">
          {/* aqui van las opciones de filtro */}
          <h3>FILTRAR</h3>
          {technologies.map((eachTech) => {
            return (
              <>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                    type="checkbox"
                    value={eachTech.name}
                    onChange={handleCheckBoxChange}
                    className="btn-check"
                    id={eachTech.id}
                    autoComplete="off"
                  />
                  <label
                    key={eachTech.id}
                    className="btn btn-outline-warning"
                    htmlFor={eachTech.id}
                  >
                    {eachTech.name}
                  </label>
                </div>
              </>
            );
          })}
        </div>

        <div className="technologies-list">
          {/* aqui van las opciones de tecnologías */}
          <h3>TECH INFO</h3>
          {technologies.map((eachTech) => {
            return (
              <Link
                to={`/infoTech/${eachTech.id}/${eachTech.name}`}
                key={eachTech.id}
              >
                <span id="each-tech-name-link">{eachTech.name}</span>
              </Link>
            );
          })}
        </div>
        <Link to="/addFlipCard">
          <button className="add-new-FlipCard-btn">Add new Flip Card</button>
        </Link>
      </section>
    </>
  );
}

export default Sidebar;
