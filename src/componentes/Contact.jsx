import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import "../cssComponentes/Contact.css";
import { basedatos, ref, push } from '../lib/firebase';

const Contact = () => {
    const [informacionFormulario, setInformacionFormulario] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [alertaVisible, setAlertaVisible] = useState(false);
    // hook de estado en falso en la inicialización para mostrar alerta

    const handleChange = (e) => {
        // manipulador de cambio en el evento de cambio en los inputs
        setInformacionFormulario({
            ...informacionFormulario,
            // información traída para a través de los valores de los inputs
            [e.target.name]: e.target.value
        });
    };

    const validarFormulario = () => {
        // validaciones del formulario
        const erroresNuevos = {};
        if (!informacionFormulario.name) erroresNuevos.name = "Nombre es requerido.";
        if (!informacionFormulario.email) {
            erroresNuevos.email = "Correo electrónico es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(informacionFormulario.email)) {
            erroresNuevos.email = "Correo electrónico no es válido.";
        }
        if (!informacionFormulario.subject) erroresNuevos.subject = "Asunto es requerido.";
        if (!informacionFormulario.message) erroresNuevos.message = "Mensaje es requerido.";
        return erroresNuevos;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errores = validarFormulario();
        if (Object.keys(errores).length > 0) {
            console.log("Errores en el formulario:", errores);
            return;
        }
        try {
            console.log("Datos a enviar: ", informacionFormulario);
            const refContactos = ref(basedatos, 'contacts');
            // almacenar en la variable de refContactos la data de cada documento en la colección firabase

            await push(refContactos, informacionFormulario);
            console.log("Formulario enviado: ", informacionFormulario);
            setInformacionFormulario({ name: "", email: "", subject: "", message: "" });
            setAlertaVisible(true);
            // Se cambio valor a true para el hook de la alerta

            setTimeout(() => setAlertaVisible(false), 1000);
            // Ocultar la alerta después de 5 segundos. 

        } catch (error) {
            console.error("Error al enviar mensaje", error);
        }
    };

    return (
        <section id="contact" className="p-5">
            {alertaVisible && (
                <div className='alert alert-success alert-fixed' role='alert'>
                    ¡Correo enviado con éxito!
                </div>
            )}
            <h2>Contacta conmigo.</h2>
            <Container className='container-contact'>
                <Row>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className='form-control'
                                value={informacionFormulario.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='form-control'
                                value={informacionFormulario.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className='form-control'
                                value={informacionFormulario.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className='form-control'
                                value={informacionFormulario.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type='submit' className='btn-submit'>Enviar</button>
                    </form>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
