import React from 'react'
import { Button, Container } from "react-bootstrap";
import '../cssComponentes/Home.css';


const Home = () => {
  return (
    /*
    <section id='home' className='p-5'>
        <div className='container'>
            <h2 className='text-center'>
            </h2>
            <p>Bienvenido a mi portafolio profesional.</p>
        </div>
    </section>
     */
    <div className='contenedor'>
      <Container className="contenedor-Home text-center py-5" >
        <h1>Bienvenido a Mi Portafolio</h1>
        <p>Desarrollador web especializado en React y Bootstrap.</p>
        <Button variant="primary" href="/about">Conoce más sobre mí</Button>
      </Container>
    </div>


  )
}

export default Home
