//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard'
import Layout from './componentes/Layout';
import RutaNoEncontrada from './componentes/RutaNoEncontrada';

function App() {
  return (
    <>
      <Routes>
          <Route element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<RutaNoEncontrada />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
