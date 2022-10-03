import './Nosotros.css';
import BrendanEich from './BrendanEich.png';
import MargaretHamilton from './MargaretHamilton.png';
import JordanWalke from './JordanWalke.png';


const Nosotros = () => {

    return(
        <div className='contenedor'>
            <div className="about-section">
            <h1>Nosotros</h1>
            <p>Nuestro equipo de desarrollo de software</p>
            <p>es parte de la historia de la humanidad</p>
            </div>

            <h2>Nuestro equipo</h2>
            <div className="row">
            <div className="column">
                <div className="card">
                <img className='team-img' src={MargaretHamilton} alt="MargaretHamilton" />
                <div className="container">
                    <h2>Margaret Hamilton</h2>
                    <p className="title">CEO & Founder</p>
                    <p>Fue directora de la División de Ingeniería de Software del Laboratorio de Instrumentación del MIT, donde con su equipo desarrolló el software de navegación "on-board" para el Programa Espacial Apolo.</p>
                    <p>margaret.hamilton@abc.com</p>
                    <p><button className="button">Contacto</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img className='team-img' src={JordanWalke} alt="JordanWalke" />
                <div className="container">
                    <h2>Jordan Walke</h2>
                    <p className="title">Art Director</p>
                    <p>Jordan Walke, quien es el creador de ReactJS anunció recientemente en la plataforma de microblogging, que después de una década deja Facebook.</p>
                    <p>jordan.walke@abc.com</p>
                    <p><button className="button">Contacto</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img className='team-img' src={BrendanEich} alt="BrendanEich" />
                <div className="container">
                    <h2>Brendan Eich</h2>
                    <p className="title">Designer</p>
                    <p>Brendan Eich es un programador estadounidense conocido por inventar el lenguaje de programación JavaScript, así como el navegador Brave.</p>
                    <p>brendan.eich@abc.com</p>
                    <p><button className="button">Contacto</button></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Nosotros;