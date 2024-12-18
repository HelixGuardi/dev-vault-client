import { Link } from "react-router-dom";
import LogoTxt from "../assets/dev-vault-logo-text.png"

function Footer() {
  return (
      <footer className="footer-container">
      <Link to="/">
        <button className="initial-config-btn home-logo-btn">
            <img id="footer-logo" src={LogoTxt} alt="dev vault logo" />
        </button>
      </Link>
        <div className="text-container">
            <p>DevVault - Tu repositorio de conocimientos y recursos para desarrolladores.</p>
            <p>© 2024 DevVault. Todos los derechos reservados.</p>
        </div>
        <div className="footer-links">
            <a className="a-link" id="github-link" href="https://github.com/HelixGuardi">Git Hub</a>
            <a className="a-link" id="linkedin-link" href="https://www.linkedin.com/in/victorhugoguardiolapereira/">Linkedin</a>
        </div>
      </footer>
  );
}

export default Footer;
