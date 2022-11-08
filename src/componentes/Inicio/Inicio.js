import Encabezado from '../Encabezado/Encabezado';
import './Inicio.css';

const Inicio = () => {

    return(
        <>
            <Encabezado/>
            <section className="background firstsection">
                <div className="box-main">
                    <div className="firstHalf">
                        <p className="text-big">Van Rossum creador de Phyton</p>
                        
                        <p className="text-small">
                        Van Rossum escribió en 1996: Hace seis años, en diciembre de 1989, estaba buscando un proyecto de programación como hobby que me mantuviera ocupado durante las semanas de Navidad. Mi oficina estaría cerrada y no tendría más que mi ordenador de casa a mano. Decidí escribir un intérprete para el nuevo lenguaje de scripting que había estado ideando recientemente: un descendiente de ABC que gustaría a los hackers de Unix/c.
                        </p>
                        <br />
                        <p className="center">
                            <a href="/contacto">Contactanos para mayor información</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Inicio;