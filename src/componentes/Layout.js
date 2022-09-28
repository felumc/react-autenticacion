import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        padding: "20px",
        textDecoration: "none",
    });

    return (
        <>
            <h3>Arquetipo de aplicacion React</h3>

            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',                    
                }}
            >
                <NavLink to="/login" style={style}>Login</NavLink>
                <NavLink to="/dashboard" style={style}>Dashboard</NavLink>
            </nav>
            
            <main style={{ paddings: '20px' }}>
                Integrando componentes
                <Outlet />
            </main>
        </>
    );
};

export default Layout;