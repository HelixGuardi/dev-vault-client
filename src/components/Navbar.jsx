import SearchBar from "./SearchBar";
import Logo from "../assets/dev-vault-logo-draw-and-text.png";
import LogoTxt from "../assets/dev-vault-logo-text.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <>
      <header className="header-container">
        <div className="header-logo-section">
          <img id="logo-txt" src={LogoTxt} alt="logo-txt" />
          <div className="header-nav-section">
            <SearchBar />
          </div>
          <NavLink to="/AboutUs" id="about-us-link">About Us</NavLink>
          <Link to="/">
            <button className="initial-config-btn home-logo-btn">
              <img id="logoIcon-img" src={Logo} alt="logo-img" />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
