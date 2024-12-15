import LogoTxt from "../assets/dev-vault-logo-text.png"

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <button className="initial-config-btn">
            <img id="footer-logo" src={LogoTxt} alt="dev vault logo" />
        </button>
        <div className="text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod neque, accusamus ex numquam id ut quae deleniti aliquid facere reiciendis nulla voluptatum dolorum possimus perspiciatis odit voluptates cum pariatur.</p>
        </div>
        <div className="footer-links">
            <a className="a-link" id="github-link" href="#">Git Hub</a>
            <a className="a-link" id="linkedin-link" href="#">Linkedin</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
