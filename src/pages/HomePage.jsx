import { useState } from "react";
import CardList from "../components/CardList";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [filteredTechs, setFilteredTechs] = useState([]);

  return (
    <>
      <section className="homePage-section">
        <Sidebar
          filteredTechs={filteredTechs}
          setFilteredTechs={setFilteredTechs}
        />
        <CardList filteredTechs={filteredTechs} />
      </section>
    </>
  );
}

export default HomePage;
