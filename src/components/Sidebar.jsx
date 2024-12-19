import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function Sidebar(props) {

  // console.log(props);
  const filteredTechs = props.filteredTechs
  const setFilteredTechs = props.setFilteredTechs

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
  
  if(technologies.length === 0) {
    return(
      <div className="loading-container">
        <PacmanLoader width={"100%"} color="#FFD166"/>
      </div>
    )
  }

  const handleCheckBoxChange = (event) => {
    // console.log(event.target.value); //entrega el nombre de cada casita marcada: JavaScript, HTML, CSS o React en este caso
    // a futuro si se llega a añadir más, pues saldrían ahí las añadidas (en teoria)

    //condicional para saber si está marcado o no.
      //si está marcado, lo agrega
      //si no está marcado, lo filtra y me devuelve un nuevo array sin el marcado
    if(event.target.checked) {
      return setFilteredTechs([...filteredTechs, event.target.value]); // añadelo
    } else {
      return setFilteredTechs((prevFilteredCards) => prevFilteredCards.filter((filter) => filter !== event.target.value)) // remuevelo (filter out)
    

    // el setState me permite un parametro que se puede llamar como quiera, se suele utilizar "prevStateNombre"
    //                      |
    // setFilterTech((prevFilterTech) => {
    //   return(
    //     prevFilterTech.includes(checkboxNameMarked) ? prevFilterTech : [...prevFilterTech, checkboxNameMarked]
    //   )
    // });

      // este código devuelve el ultimo estado en caso de que incluya el nombre marcado, si no lo incluye devuelve el ultimo estado actualizado con el nombre nuevo marcado
    }

  }

  //hago esto para lograr ver el estado actualizado en la consola, ya que JS es asincrono y a veces tardo en recibir respuesta
  // useEffect(() => {
  //   console.log(filteredCards);
  // }, [filteredCards]) //component didMountUpdate o algo así



  return (
    <>
      <section className="side-bar-container">
        <div className="filter-section">
          {/* aqui van las opciones de filtro */}
          <h3>FILTRAR</h3>
          {technologies.map((eachTech) => {
            return (
              <>
                <label key={eachTech.id}>
                </label>
                  <input type="checkbox" style={{marginRight: "5px"}} value={eachTech.name} onChange={handleCheckBoxChange} />
                  {eachTech.name}
              </>
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
