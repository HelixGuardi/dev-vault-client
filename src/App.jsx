import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import AddNewFlipCard from "./pages/AddNewFlipCardPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import TechInfoPage from "./pages/TechInfoPage";

function App() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/technologies")
      .then((response) => {
        // console.log(response);
        setTechnologies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [flipCards, setFlipCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/flipCards")
      .then((response) => {
        // console.log(response);
        setFlipCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/addFlipCard" element={<AddNewFlipCard />} />
        <Route
          path="/details/:flipCardId/:flipCardTitle"
          element={<CardDetailsPage flipCards={flipCards} technologies={technologies}/>}
        />
        <Route
          path="/infoTech/:techId/:techName"
          element={<TechInfoPage technologies={technologies} flipCards={flipCards}/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
