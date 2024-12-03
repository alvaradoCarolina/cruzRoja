// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import RecoverPassword from './components/RecoverPassword';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgramarCita from './pages/ProgramarCita';
import VerCitas from './pages/VerCitas';
import ReprogramarCita from './pages/ReprogramarCita';
import CancelarCita from './pages/CancelarCita';
import FormularioDonacion from './pages/FormularioDonacion';
import ActualizarDatos from './pages/ActualizarDatos';
import Contacto from './pages/Contacto';
import Informacion from './pages/Informacion';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/programarcita" element={<ProgramarCita />} />
      <Route path="/vercitas" element={<VerCitas />} />
      <Route path="/reprogramarcita" element={<ReprogramarCita />} />
      <Route path="/cancelarcita" element={<CancelarCita />} />
      <Route path="/formulariodonacion" element={<FormularioDonacion />} />
      <Route path='/actualizardatos' element={<ActualizarDatos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/informacion" element={<Informacion />} />
    </Routes>
  );
}

export default App;
