import React from 'react';
import logo from './logo.svg';
import logo1 from './logo1.svg';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const BrandLogo = () => {
  return (
    <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img   src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <img  src={logo1} style={{  borderRadius:'50%'}} className="App-logo" alt="logo" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BrandLogo;
