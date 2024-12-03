import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import CustomNavbar from '../components/NavbarConSubmenu';
import '../styles/FormularioDonacion.css';
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const FormularioDonacion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    donacionesPrevias: '',
    tipoSangre: '',
    problemasSalud: '',
    medicamentos: '',
    viajes: '',
    enfermedadesSangre: '',
    nuevaPareja: '',
    alcohol: '',
    drogas: '',
    embarazo: '',
    transfusion: '',
    cirugia: '',
    enfermedadGrave: '',
    tatuajes: '',
    infeccionBoca: '',
    infeccionOjos: '',
    infeccionPiel: '',
    infeccionOidos: '',
    infeccionPulmones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "donaciones"), formData);
      alert("Formulario enviado con éxito.");
      setFormData({
        nombre: '',
        email: '',
        edad: '',
        donacionesPrevias: '',
        tipoSangre: '',
        problemasSalud: '',
        medicamentos: '',
        viajes: '',
        enfermedadesSangre: '',
        nuevaPareja: '',
        alcohol: '',
        drogas: '',
        embarazo: '',
        transfusion: '',
        cirugia: '',
        enfermedadGrave: '',
        tatuajes: '',
        infeccionBoca: '',
        infeccionOjos: '',
        infeccionPiel: '',
        infeccionOidos: '',
        infeccionPulmones: ''
      });
      navigate('/confirmacion');
    } catch (e) {
      console.error("Error al enviar el formulario: ", e);
      alert("Error al enviar el formulario: " + e.message);
    }
  };

  return (
    <div className="formulario-donacion-container">
      <CustomNavbar />
      <Container fluid className="formulario-donacion-main-content">
        <Row className="formulario-donacion-top-bar">
          <Col md={12}>
            <h1 className="text-white">Formulario de Donación de Sangre</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="formulario-donacion-content">
            <h2>Ingrese su Información</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="number"
                  name="edad"
                  placeholder="Ingrese su edad"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDonacionesPrevias">
                <Form.Label>¿Cuántas veces ha donado sangre?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Nunca"
                  name="donacionesPrevias"
                  value="Nunca"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="1 a 3 veces"
                  name="donacionesPrevias"
                  value="1 a 3 veces"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="4 o más veces"
                  name="donacionesPrevias"
                  value="4 o más veces"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTipoSangre">
                <Form.Label>Tipo de Sangre</Form.Label>
                <Form.Control
                  as="select"
                  name="tipoSangre"
                  value={formData.tipoSangre}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione su tipo de sangre</option>
                  <option value="A+">A +</option>
                  <option value="A-">A -</option>
                  <option value="B+">B +</option>
                  <option value="B-">B -</option>
                  <option value="AB+">AB +</option>
                  <option value="AB-">AB -</option>
                  <option value="O+">O +</option>
                  <option value="O-">O -</option>
                </Form.Control>
              </Form.Group>
              {/* Preguntas adicionales */}
              <Form.Group controlId="formProblemasSalud">
                <Form.Label>¿Tienes algún problema de salud actual?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="problemasSalud"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="problemasSalud"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMedicamentos">
                <Form.Label>¿Estás tomando algún medicamento?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="medicamentos"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="medicamentos"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formViajes">
                <Form.Label>¿Has viajado fuera del país en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="viajes"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="viajes"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEnfermedadesSangre">
                <Form.Label>¿Has tenido alguna enfermedad transmisible por la sangre (como el VIH, la hepatitis, la sífilis)?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="enfermedadesSangre"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="enfermedadesSangre"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formNuevaPareja">
                <Form.Label>¿Has tenido contacto sexual con una nueva pareja en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="nuevaPareja"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="nuevaPareja"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAlcohol">
                <Form.Label>¿Has consumido alcohol en los últimos 24 horas?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="alcohol"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="alcohol"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDrogas">
                <Form.Label>¿Has consumido drogas recreativas en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="drogas"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="drogas"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmbarazo">
                <Form.Label>¿Has estado embarazada en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="embarazo"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="embarazo"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formTransfusion">
                <Form.Label>¿Has recibido una transfusión de sangre en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="transfusion"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="transfusion"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCirugia">
                <Form.Label>¿Has sido sometido a una cirugía mayor en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="cirugia"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="cirugia"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEnfermedadGrave">
                <Form.Label>¿Has tenido alguna enfermedad grave en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="enfermedadGrave"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="enfermedadGrave"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formTatuajes">
                <Form.Label>¿Has tenido alguna inyección de tatuajes o piercings en los últimos 12 meses?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="tatuajes"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="tatuajes"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInfeccionBoca">
                <Form.Label>¿Has tenido alguna infección en los labios o la boca?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="infeccionBoca"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="infeccionBoca"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInfeccionOjos">
                <Form.Label>¿Has tenido alguna infección en los ojos?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="infeccionOjos"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="infeccionOjos"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInfeccionPiel">
                <Form.Label>¿Has tenido alguna infección en la piel?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="infeccionPiel"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="infeccionPiel"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInfeccionOidos">
                <Form.Label>¿Has tenido alguna infección en los oídos?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="infeccionOidos"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="infeccionOidos"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formInfeccionPulmones">
                <Form.Label>¿Has tenido alguna infección en los pulmones?</Form.Label>
                <Form.Check
                  type="radio"
                  label="Sí"
                  name="infeccionPulmones"
                  value="Sí"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="infeccionPulmones"
                  value="No"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="form-buttons">
                <Button variant="secondary" block className="mr-2">Cancelar</Button>
                <Button variant="primary" type="submit" block>Enviar</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormularioDonacion;
