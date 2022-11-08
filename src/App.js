import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import Nosotros from './componentes/Nosotros/Nosotros';
import Login from './componentes/Login/Login';
import Dashboard from './componentes/Dashboard'
import Layout from './componentes/Layout/Layout';
import RutaNoEncontrada from './componentes/RutaNoEncontrada';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='*' element={<RutaNoEncontrada />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;