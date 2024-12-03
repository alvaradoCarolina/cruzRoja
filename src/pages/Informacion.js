import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from '../components/NavbarConSubmenu';
import '../styles/Informacion.css';
import imagenDonacion from '../assets/images/home2.png'; 
import imagenDonacion1 from '../assets/images/info3.png'; 
import Footer from '../components/Footer';

const InformacionCruzRoja = () => {
  return (
    <div className="informacion-cruz-roja-container">
      <CustomNavbar />
      <Container fluid className="informacion-cruz-roja-main-content">
        <Row className="informacion-cruz-roja-top-bar">
          <Col md={12}>
            <h1 className="text-white">Información sobre la Donación de Sangre</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="informacion-cruz-roja-image">
            <Image src={imagenDonacion1} alt="Donación de Sangre" fluid />
          </Col>
          <Col md={6} className="informacion-cruz-roja-content">
            <h2>La donación de sangre es un acto solidario que puede salvar vidas. </h2>
            <h2>Cada donación puede ayudar a hasta tres personas diferentes.</h2>
            <h2>Además, la donación de sangre es segura y fácil de realizar.</h2>
            
            
            <h2>Requisitos para Donar Sangre</h2>
            <ul>
              <li>Autorización y edad: Presentar documento de identificación. Los donantes deben tener entre 18 y 65 años de edad (los menores de 18 años pueden donar con autorización de su representante legal, los mayores de 65 años presentar certificado médico).</li>
              <li>Peso adecuado: Se requiere un peso mínimo de 50 kilos (110 libras).</li>
              <li>Buena salud general: El donante debe estar en buen estado de salud.</li>
              <li>No haber donado sangre en los últimos 56 días.</li>
              <li>No tener enfermedades transmisibles por la sangre (VIH, hepatitis, etc.).</li>
              <li>No estar bajo tratamiento con ciertos medicamentos.</li>
              <li>No haber viajado a zonas endémicas de malaria en el último año.</li>
              <li>No tatuajes recientes: Después de realizarse un tatuaje, se debe esperar al menos 12 meses para donar.</li>
              <li>Descanso: Los donantes deben haber cumplido con las horas mínimas de sueño (6 horas).</li>
              <li>Alimentación previa: Es importante haber ingerido alimentos en las últimas 4 horas antes de la donación. No donar en ayunas.</li>
              <li>No cirugías recientes: No se debe haber sometido a cirugías mayores durante el último año.</li>
            </ul>
          </Col>
        </Row>
        <Col md={20} className="informacion-cruz-roja-image">
        <h2>Mitos y Verdades</h2>
        <p>¿Donar sangre engorda?</p>
        <p>Donar sangre no engorda, la persona tiene que mantener la ingesta de alimentos conforme su dieta habitual. </p>
        <p>Si dono sangre, ¿puedo presentar anemia?</p>
        <p>No, la anemia no se presenta por donar sangre debido a que el organismo se encarga de producir las células y remplazar las células donadas.</p>
        <p>¿Me puedo contagiar de alguna enfermedad si dono sangre?</p>
        <p>No, el material que se utiliza es nuevo, estéril y se descarta después del uso.</p>
        <p>¿Solo puedo donar sangre una vez al año?</p>
        <p>Se puede donar más de una vez al año. Las mujeres pueden donar cada cuatro meses y los hombres cada tres meses.</p>
        <p>¿Las personas con tatuajes y piercing pueden donar sangre?</p>
        <p>Si pueden donar sangre, hay que esperar 12 meses después de haberse realizado el tatuaje o colocado el piercing.La donación de sangre es un acto solidario que puede salvar vidas. Cada donación puede ayudar a hasta tres personas diferentes. Además, la donación de sangre es segura y fácil de realizar.</p>
        
          </Col>
            
        <Row>
        <Col md={6} className="informacion-cruz-roja-content">
            <h2>Beneficios</h2>
            <ul>
              <li>Satisfacción de salvar vidas: Al donar sangre, estás contribuyendo a salvar vidas. ¡Nada puede ser más gratificante!



.</li>
              <li>Fomentar estilo de vida saludable: La donación de sangre te motiva a mantener un estilo de vida saludable. </li>
              <li>Realizar un control de salud básico: Antes de donar, se realiza un chequeo básico de salud que incluye peso, pulso, presión arterial y hemoglobina.</li>
              <li>Renovación celular: Donar sangre ayuda a la renovación celular, mejorando el transporte de oxígeno a los tejidos y transportando el dióxido de carbono para ser eliminados de los pulmones.</li>
            </ul>
          </Col>
          <Col md={6} className="informacion-cruz-roja-image">
            <Image src={imagenDonacion} alt="Donación de Sangre" fluid />
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default InformacionCruzRoja;
