import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Confirmacion.css'

const Confirmacion = () => {
  return (
    <Container fluid className="confirmacion-container">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>Formulario registrado con éxito</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmacion;
