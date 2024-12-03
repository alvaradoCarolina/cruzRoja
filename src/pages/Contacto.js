import React, { useState } from 'react';
import "../styles/Contacto.css";
import sectorImage from '../assets/images/sectorImage.png';
import mapaPichincha from '../assets/images/mapaPichincha.png';
import mapaEcuador from '../assets/images/mapaEcuador.png';
import Navbar from '../components/NavbarConSubmenu';
import Footer from '../components/Footer';

const Contacto = () => {
  const [sector, setSector] = useState('');
  const [showSectorMap, setShowSectorMap] = useState(false);

  const handleSectorChange = (e) => {
    setSector(e.target.value);
    setShowSectorMap(true);
  };

  return (
    <div className="contacto-container">
        <Navbar />
      {/* Imagen al principio */}
      <div className="header-image">
        <img src={sectorImage} alt="Imagen de cabecera" className="img-fluid" />
      </div>
      
      {/* Sección para seleccionar sector */}
      <div className="sector-selection">
        <h2>Selecciona tu Sector</h2>
        <div className="sector-options">
          <select value={sector} onChange={handleSectorChange}>
            <option value="">Seleccione un sector</option>
            <option value="norte">Norte</option>
            <option value="centro">Centro</option>
            <option value="sur">Sur</option>
          </select>
          <div className="sector-details">
            {sector === 'norte' && <p>Opciones para el sector Norte</p>}
            {sector === 'centro' && <p>Opciones para el sector Centro</p>}
            {sector === 'sur' && <p>Opciones para el sector Sur</p>}
          </div>
        </div>
      </div>

      {/* Mapa y detalles de contacto del sector seleccionado */}
      {showSectorMap && (
        <div className="sector-map-contact">
          <div className="sector-map">
            <img src={mapaPichincha} alt="Mapa de sector" className="img-fluid" />
          </div>
          <div className="sector-contact-details">
            <h3>Contacto del Sector</h3>
            <p>Correo Electrónico: <a href="mailto:info@cruzrojapichincha.org">info@cruzrojapichincha.org</a></p>
            <p>Teléfono: <a href="tel:+593022902834">(+593)02-2902834</a></p>
          </div>
        </div>
      )}

      {/* Mapa general con todos los puntos de Cruz Roja y detalles de contacto generales */}
      <div className="general-map-contact">
        <div className="general-map">
          <img src={mapaEcuador} alt="Mapa general" className="img-fluid" />
        </div>
        <div className="general-contact-details">
          <h3>Contacto General</h3>
          <p>Correo Electrónico: <a href="mailto:comunicacion@cruzroja.org.ec">comunicacion@cruzroja.org.ec</a></p>
          <p>Teléfono: <a href="tel:+59322582482">(+593 2) 2582 482</a></p>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Contacto;
