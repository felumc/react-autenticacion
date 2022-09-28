import * as React from 'react';
import ApiFalsa from "./ApiFalsa";
import { ContextoDeAutenticacion } from "./ContextoDeAutenticacion";
import {useNavigate, useLocation} from 'react-router-dom';

const ProveedorDeAutenticacion = ({ children }) => {
    const navigate = useNavigate();

    const localizacion = useLocation();

    const [token, setToken] = React.useState(null);

    const handleLogin = async () => {
        const token = await ApiFalsa();
        setToken(token);
        console.log(token);
        //navigate('/dashboard');
        //Tomar el estado con la página anterior de la ubicacion de React Router
        //Cuando ocurre un inicio de sesión, podemos tomar la página anterior
        //para redirigir al usuario a esta pagina deseada.
        const origen = localizacion.state?.from?.pathname || '/dashboard';
        navigate(origen);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const valores = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <ContextoDeAutenticacion.Provider value={valores}>
            {children}
        </ContextoDeAutenticacion.Provider>
    );
};

export default ProveedorDeAutenticacion;