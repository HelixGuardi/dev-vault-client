import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/technologies`)
      .then((response) => {
        // console.log(response);
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="side-bar-container">
        <div className="filter-section">
          {/* aqui van las opciones de filtro */}
          <h3>FILTRAR</h3>
          {technologies.map((eachTech) => {
            return (
                <label key={eachTech.id}>
                  <input type="checkbox" style={{marginRight: "5px"}}/>
                  {eachTech.name}
                </label>
            );
          })}
        </div>

        <div className="technologies-list">
          <h3>TECH INFO</h3>
          {technologies.map((eachTech) => {
            return (
              <Link to={`/infoTech/${eachTech.id}/${eachTech.name}`} key={eachTech.id}>
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
