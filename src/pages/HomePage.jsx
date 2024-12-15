import CardList from "../components/CardList";
import Sidebar from "../components/Sidebar"

function HomePage() {

    return (
        <>
        <section className="homePage-section">
            <Sidebar />
            <CardList />
        </section>
        </>
    )
}

export default HomePage;