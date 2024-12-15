import { Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <HomePage /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
