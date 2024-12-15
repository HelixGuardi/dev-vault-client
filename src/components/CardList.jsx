import axios from "axios";
import { useEffect, useState } from "react";

function CardList() {
  const [technologies, setTechnologies] = useState([]);
  const [flipCards, setFlipCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/technologies")
      .then((response) => {
        // console.log(response.data);
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5005/flipCards") // para conseguir los flipcards
      .then((response) => {
        console.log(response.data);
        setFlipCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="card-list-container">
        {flipCards.map((eachCard, i) => {
          return (
            <button key={i} className="flip-card-btn-container">
              <div className="flip-card">
                <h2>{eachCard.title}</h2>
                <div className="flipCard-tags">
                    <p>tags</p>
                    <p>tags</p>
                </div>
              </div>
            </button>
          );
        })}
      </section>
    </>
  );
}

export default CardList;
