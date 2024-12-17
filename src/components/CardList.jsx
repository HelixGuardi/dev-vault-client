import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../sub-components/Card";

function CardList() {

  const [flipCards, setFlipCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/flipCards?_expand=technology") // para conseguir los flipcards
      .then((response) => {
        // console.log(response);
        setFlipCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const getData = () => {
    axios.get("http://localhost:5005/flipCards")
    .then((response) => {
      // console.log(response);
      setFlipCards(response.data);
    })
  }
  

  return (
      <section className="card-list-container">
        {flipCards.map((eachCard) => {
          return(
            <Card eachCard={eachCard} getDataFunction={getData}/>
          )
        })}
      </section>
  );
}

export default CardList;
