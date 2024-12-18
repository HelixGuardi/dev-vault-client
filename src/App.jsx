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
import EditFlipCard from "./pages/EditFlipCard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/addFlipCard" element={<AddNewFlipCard />} />
        <Route
          path="/details/:flipCardId/:flipCardTitle"
          element={<CardDetailsPage />}
        />
        <Route
          path="/infoTech/:techId/:techName"
          element={<TechInfoPage />}
        />
        <Route path="/details/edit-card/:flipCardId/:flipCardTitle" element={ <EditFlipCard /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
