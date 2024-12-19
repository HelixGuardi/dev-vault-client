import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../sub-components/Card";
import { PacmanLoader } from "react-spinners";

function CardList(props) {

  // console.log(props);
  const { filteredTechs } = props;
  // console.log(filteredCards)

  const [flipCards, setFlipCards] = useState([]);

  useEffect(() => {
    getData()
  }, []);


  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/flipCards?_expand=technology`) // para conseguir los flipcards + la tech a la que pertenece cada flipCard
      .then((response) => {
        // console.log(response);
        setFlipCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if(flipCards.length === 0) {
    return(
      <div className="loading-container">
        <PacmanLoader width={"100%"} color="#FFD166"/>
      </div>
    )
  }

  return (
      <section className="card-list-container">
        {flipCards
        .filter((eachCard) => {
          if (filteredTechs.length === 0) {
            return true // si no hay tecnologias seleccionadas, incluye todo
          } else {
            return filteredTechs.includes(eachCard.technology.name); // si hay tecnologias seleccionadas, incluye solo esas
          }
        })
        .map((eachCard) => {
          return(
            <Card key={eachCard.id} eachCard={eachCard} getData={getData}/>
          )
        })}
      </section>
  );
}

export default CardList;
