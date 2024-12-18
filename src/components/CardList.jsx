import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../sub-components/Card";

function CardList() {

  const [flipCards, setFlipCards] = useState([]);

  useEffect(() => {
    getData()
  }, []);


  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/flipCards?_expand=technology`) // para conseguir los flipcards
      .then((response) => {
        // console.log(response);
        setFlipCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
      <section className="card-list-container">
        {flipCards.map((eachCard) => {
          return(
            <Card key={eachCard.id} eachCard={eachCard} getData={getData}/>
          )
        })}
      </section>
  );
}

export default CardList;
