import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard'
import Layout from './componentes/Layout';
import RutaNoEncontrada from './componentes/RutaNoEncontrada';
import * as React from 'react';
import ProveedorDeAutenticacion from './componentes/ProveedorDeAutenticacion';
import ProtegerRuta from './componentes/ProtegerRuta';
import Administrador from './componentes/Administrador';

function App() {
  return (
    <ProveedorDeAutenticacion>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard'
            element={
              <ProtegerRuta>
                <Dashboard />
              </ProtegerRuta>
            } />
          <Route path='/admin'
            element={
              <ProtegerRuta>
                <Administrador />
              </ProtegerRuta>
            } />
          <Route path='*' element={<RutaNoEncontrada />} />
        </Route>
      </Routes>
    </ProveedorDeAutenticacion>
  );
}

export default App;