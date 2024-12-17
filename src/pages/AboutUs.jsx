import Logo from "../assets/dev-vault-logo-draw-and-text.png";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-head">
        <h1>Sobre Nosotros</h1>
        <img src={Logo} alt="logo" />
      </div>
      <div className="about-us-content">
        <h2>
          Bienvenido a <span>DevVault</span> - tu centro interactivo y
          organizado de conocimiento
        </h2>
        <p className="about-us-description">
          En DevVault, creemos que el aprendizaje y el crecimiento en
          programación deben ser accesibles, estructurados e inspiradores.
          Nacido del deseo de consolidar conocimientos y compartirlos con el
          mundo, DevVault funciona como una base de conocimiento interactiva
          diseñada para desarrolladores de todos los niveles. Ya sea revisando
          conceptos clave, filtrando por etiquetas para encontrar tecnologías
          específicas o gestionando información con nuestras funcionalidades
          CRUD, DevVault garantiza que el aprendizaje y la organización vayan de
          la mano. Nuestra misión es simple: empoderar a los desarrolladores
          para aprender, organizar y crecer con claridad y eficiencia. Desde los
          conceptos más básicos hasta habilidades avanzadas, te acompañamos en
          cada paso de tu camino.
        </p>
        <p><span>DevVault — porque el conocimiento merece un espacio para prosperar.</span></p>
      </div>
    </div>
  );
}

export default AboutUs;
