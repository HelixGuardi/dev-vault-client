import SearchBar from "./SearchBar";
import HomeIcon from "../assets/home-icon.png"
import Logo from "../assets/dev-vault-logo-draw-and-text.png"
import LogoTxt from "../assets/dev-vault-logo-text.png"

function Navbar() {
    //todo buscar un icono de "home" para el src de img
    //todo hacer el logo de la página y agregar al src de img
    //todo buscar un icono de magnifying-glass y agregar al src de img

    return(
        <>
            <header className="header-container">

                <div className="header-logo-section">
                    <img id="logo-txt" src={LogoTxt} alt="logo-txt" />
                    <button><img id="homeIcon-img" src={HomeIcon} alt="home-btn" /></button> 
                    <img  id="logoIcon-img" src={Logo} alt="logo-img" /> 
                </div>

                <div className="header-nav-section">
                    <SearchBar/>
                    <nav className="nav-section">
                        <ul>
                            <li>About Us</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;