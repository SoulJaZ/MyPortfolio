import React from 'react';
import { Container } from 'react-bootstrap';
import '../cssComponentes/Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;