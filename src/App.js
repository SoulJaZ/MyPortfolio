import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav, Navbar, Container, NavbarToggle, NavDropdown } from "react-bootstrap";
import Home from "./componentes/Home";
import About from './componentes/About';
import Contact from './componentes/Contact'
import Welcome from './componentes/Welcome'
import Footer from './componentes/Footer';
import OtrosProjectos from './componentes/OtrosProjectos'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="black" variant="dark" expand="lg">
          <Container>
              <Navbar.Brand href="/welcome">My portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown href="/projects" title="Proyectos" id="basic-nav-drodown">
                    <NavDropdown.Item href="/project/1"> 1.</NavDropdown.Item>
                    <NavDropdown.Item href="/project/2"> 2.</NavDropdown.Item>
                    <NavDropdown.Item href="/project/3"> 3.</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/projects/other">Projects.</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
          </Container>  
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/project/:identificadorProyecto" element={<OtrosProjectos />}/>
          <Route path="projects/other" element={<OtrosProjectos />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
