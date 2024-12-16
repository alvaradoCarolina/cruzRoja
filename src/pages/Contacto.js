import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { db } from '../services/firebaseConfig';
import "../styles/Contacto.css";
import sectorImage from '../assets/images/sectorImage.png';
import Navbar from '../components/NavbarConSubmenu';
import 'leaflet/dist/leaflet.css';

const Contacto = () => {
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    const fetchUbicaciones = async () => {
      const querySnapshot = await getDocs(collection(db, "ubicaciones"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUbicaciones(data);
    };

    fetchUbicaciones();
  }, []);

  const cruzRojaIconMarker = new L.Icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/016/314/339/small/red-circle-red-dot-icon-free-png.png', // URL de un círculo rojo
    iconSize: [15, 15], // Ajusta el tamaño del círculo
    iconAnchor: [7.5, 7.5], // Centro del icono para alinearse con las coordenadas
  });
  

  const sectores = ["norte", "centro", "sur"];
  const coordenadasSectores = {
    norte: [-0.1760813802672464, -78.47485900329045],
    centro: [-0.2157000572708297, -78.50360031660246],
    sur: [-0.31062179487857083, -78.54347381808886]
  };

  const contactosSectores = {
    norte: {
      email: "info@cruzrojanorte.org",
      telefono: "(+593) 02-2902834"
    },
    centro: {
      email: "info@cruzrojacentro.org",
      telefono: "(+593) 02-2902835"
    },
    sur: {
      email: "info@cruzrojasur.org",
      telefono: "(+593) 02-2902836"
    }
  };

  return (
    <div className="contacto-container">
      <Navbar />
      <div className="header-image">
        <img src={sectorImage} alt="Imagen de cabecera" className="header-full-width" />
      </div>

      <div className="sectores-mapas" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        {sectores.map((sector) => (
          <div key={sector} className="sector-map-contact" style={{ flex: 1, textAlign: 'center' }}>
            <h3>Sector {sector.charAt(0).toUpperCase() + sector.slice(1)}</h3>
            <MapContainer 
              center={coordenadasSectores[sector]} 
              zoom={14} 
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {ubicaciones.filter(ubicacion => ubicacion.sector === sector).map((ubicacion) => (
                <Marker 
                  key={ubicacion.id} 
                  position={[ubicacion.lat, ubicacion.lng]} 
                  icon={cruzRojaIconMarker}
                >
                  <Popup>
                    {ubicacion.nombre} <br /> {ubicacion.direccion}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="sector-contact-info" style={{ marginTop: '10px' }}>
              <p><strong>Correo Electrónico:</strong> <a href={`mailto:${contactosSectores[sector].email}`}>{contactosSectores[sector].email}</a></p>
              <p><strong>Teléfono:</strong> <a href={`tel:${contactosSectores[sector].telefono}`}>{contactosSectores[sector].telefono}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacto;
