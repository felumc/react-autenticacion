import { Outlet, NavLink } from 'react-router-dom';
import { React, Component } from "react";
import { ContextoDeAutenticacion } from "./ContextoDeAutenticacion";

class Layout extends Component {

    static contextType = ContextoDeAutenticacion;

    componentDidMount() {
        const valoresDelContexto = this.context;
        console.log(valoresDelContexto); // {token: null, onLogin: ƒ, onLogout: ƒ}
    }

    render() {
        const style = ({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            padding: '20px',
            textDecoration: 'none',
        });

        const valoresDelContexto = this.context;

        return (
            <>
                <h3>Arquetipo de aplicación React</h3>

                <nav
                    style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                    }}
                >

                <NavLink to="/login" style={style}>Login</NavLink>
                <NavLink to="/dashboard" style={style}>Dashboard</NavLink>
                <NavLink to="/admin" style={style}>Administrador</NavLink>
                
                {valoresDelContexto.token && (
                    <button type='button' onClick={valoresDelContexto.onLogout}>
                        Cerrar sesión
                    </button>
                )}

                </nav>

                <main style={{ paddings: '20px' }}>
                    Integrando componentes
                    <Outlet />
                </main>
            </>
        );
    }
}
export default Layout;
