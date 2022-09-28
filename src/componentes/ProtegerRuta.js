import { React, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextoDeAutenticacion } from "./ContextoDeAutenticacion";

const ProtegerRuta = ({ children }) => {
    const valoresDelContexto = useContext(ContextoDeAutenticacion);
    const localizacion = useLocation();
    if (!valoresDelContexto.token) {
        return <Navigate to="/login" replace state={{from: localizacion}}/>;
    }
    return children;
};

export default ProtegerRuta;