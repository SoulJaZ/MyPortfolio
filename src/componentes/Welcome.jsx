import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import imagenPerfil from '../imagenes/imagenPerfilManuel.jpg';
import imgProjectCalculator from '../imagenes/Calculator.png';
import imgProjectChronometer from '../imagenes/Chronometer.png';
import imaProjectLogin from '../imagenes/Login.png';
import '../cssComponentes/Welcome.css'

function Welcome() {
  return (
    <section id='welcome' className='p-5'>
      <Container >
        <Row>
          <p>Proyects</p>
        </Row>
        <Row>
          <div className='card contenedor-tarjetas shadow-sm p-3 mb-5 bg-black rounded'>
            <div class="card" style={{ width: '18rem' }}>
              <img src={imgProjectCalculator} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Calculator JavaScript</h5>
                <p class="card-text">This is one of many projects, in this prjects i wish .</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img src={imaProjectLogin} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">React Web</h5>
                <p class="card-text">In this project, I create a website, I create it using javaScript programming language, CSS and HTML code, with library as React.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img src={imgProjectChronometer} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Chronometer</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Welcome
