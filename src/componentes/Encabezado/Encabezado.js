import { NavLink } from 'react-router-dom';
import './Encabezado.css';
import logoRestaurant from './logoRestaurant.png';

const Encabezado = () => {
  return (
    <>
        <nav className='navbar background'>
            <ul className='nav-list'>
                <div className="logo">
                    <img src={logoRestaurant} alt="logo"/>
                </div>
                <li><NavLink to="/inicio">Inicio</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
            <div className="rightNav">
                <NavLink to="/login" className='link'>Login</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Encabezado