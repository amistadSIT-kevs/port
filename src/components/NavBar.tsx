import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="py-3 sticky-top" // added sticky-top so it stays at the top while scrolling
      style={{ backgroundColor: '#111111', borderBottom: '1px solid #222' }}
    >
      <Container>
        <Navbar.Brand
          href="#home" // Points to the top
          className="fw-medium"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            letterSpacing: '0.05em',
            color: '#ffffff',
          }}
        >
          My Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">

            <Nav.Link href="#home" style={{ fontSize: 14, color: '#ffffff' }}>
              Home
            </Nav.Link>

            <Nav.Link href="#about" style={{ fontSize: 14, color: '#888' }}>
              About
            </Nav.Link>

            <Nav.Link href="#projects" style={{ fontSize: 14, color: '#888' }}>
              Projects
            </Nav.Link>

            <Nav.Link
              href="#contact"
              className="ms-2 px-3 py-1 rounded-2"
              style={{
                fontSize: 14,
                color: '#fff',
                border: '1px solid #444',
              }}
            >
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;