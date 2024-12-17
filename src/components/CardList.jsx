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
  

  return (
      <section className="card-list-container">
        {flipCards.map((eachCard) => {
          return(
            <Card eachCard={eachCard}/>
          )
        })}
      </section>
  );
}

export default CardList;
