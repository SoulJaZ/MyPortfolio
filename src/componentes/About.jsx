import React from 'react'
import '../cssComponentes/About.css'
import imagenPerfil from '../imagenes/imagenPerfilManuel.jpg';


const About = () => {
    return (
        <section id='about' className='p-5'>
            <div className='container-about'>
                <h2 className='text-center'>
                </h2>
                <div className='contenedor-info'>
                    <div className='contenedor-imagen'>
                        <img className="imagen-perfil" src={imagenPerfil} alt="perfil" />
                    </div>
                    <div className='contenedor-texto'>
                        <p>¡Hello there! I'm Manuel Gordillo.
                            Here a little bit about me.
                        </p>
                    </div>
                </div>
                <div className='card contenedor-descripcion shadow-sm p-3 mb-5 bg-white rounded'>
                    <p className='titulos-descripcion'><span className="badge bg-primary">WORK</span></p>
                    <p>
                    Vocation to generate effective and safe solutions to computer problems where the use of programming is essential to solve problem situations.
                    </p>
                    <p className='titulos-descripcion'><span className="badge bg-success">PROGRAMMING</span></p>
                    <p>
                        Handling of diverse IT and technological tools to achieve development plans or strategies, from programming languages such as Java, JavaScript, to DB management with SQL and its integration.
                    </p>
                    <p className='titulos-descripcion'><span className="badge bg-info">TECHNICAL SUPPORT</span></p>
                    <p>
                        Provide technical and technological support through the hotline, and on-site, for users and customers of the company. Also perform preventive and corrective maintenance service processes to computer equipment: laptops. Provide inductions and training for the use of digital tools, web platforms, desktop and mobile applications to be used by new users.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About
