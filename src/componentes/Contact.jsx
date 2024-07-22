import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import "../cssComponentes/Contact.css";
import { basedatos } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const [informacionFormulario, setInformacionFormulario] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setInformacionFormulario({
            ...informacionFormulario,
            [e.target.name]: e.target.value
        });
    };

    const validarFormulario = () => {
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
            await addDoc(collection(basedatos, 'contacts'), informacionFormulario);
            console.log("Formulario enviado: ", informacionFormulario);
            setInformacionFormulario({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error al enviar mensaje", error);
        }
    };

    return (
        <section id="contact" className="p-5">
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
