import React from 'react';
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-row">
        <section className="contacto-info">
          <h2>Contacto</h2>
          <ul>
            <li><strong>Teléfono:</strong> (+593 2) 2582 482, <strong>Email:</strong> comunicacion@cruzroja.org.ec, <strong>Dirección:</strong> Antonio Elizalde E4-31 y Av. Gran Colombia, sector La Alameda. Quito - Ecuador</li>
          </ul>

        </section>
      </div>

      <footer className="footer"> 
        <div className="footer-links"> 
            <a >CRE© 2024 Todos los derechos reservados</a> 
        </div> 
      </footer>
    </div>
  );
};

export default Contacto;
