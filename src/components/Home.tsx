import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// 1. Ensure these paths match your folder structure exactly
import kev from '../assets/kev.jpg'; 
import background from '../assets/back.jpg';

const Home = () => {
  // 2. Define the style object here (inside the component, before the return)
const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100vw', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0
};

  return (
    // 3. Apply the style object to the section
    <section 
      style={sectionStyle}
      className="text-center text-white position-relative overflow-hidden"
    >
      {/* Dark Gradient Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))', 
          zIndex: 0 
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            
            {/* Profile Picture */}
            <div className="mb-4 text-center d-flex justify-content-center">
              <Image 
                src={kev} 
                alt="Kevin Amistad"
                roundedCircle
                className="border border-2 border-secondary shadow-lg object-fit-cover"
                style={{ width: '180px', height: '180px' }}
              />
            </div>

            {/* Content */}
            <h1 className="display-3 fw-bold mb-3">
              Kevin Amistad
            </h1>
            
            <div className="d-flex align-items-center justify-content-center mb-4 text-info text-uppercase fw-semibold" style={{ letterSpacing: '0.2rem', fontSize: '0.9rem' }}>
              <div className="bg-info me-3" style={{ height: '1px', width: '30px' }}></div>
              BSIT Student @ University of Baguio
              <div className="bg-info ms-3" style={{ height: '1px', width: '30px' }}></div>
            </div>

            <p className="lead text-secondary-emphasis mb-5">
              <span className="text-white fw-medium"> Aspiring to be in Full-Stack Development and Java Systems</span>.
            </p>

            {/* Navigation Buttons */}
            <div className="d-flex gap-3 justify-content-center">
              <Button as={Link} to="/projects" variant="light" size="lg" className="rounded-pill px-4 fw-bold">
                View My Works
              </Button>
              <Button as={Link} to="/contact" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                Let's Connect
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;