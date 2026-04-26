import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Define your default "Admin" credentials
    const adminEmail = "admin@kevin.com";
    const adminPassword = "password123";

    // 2. Check the inputs against the defaults
    if (email === adminEmail && password === adminPassword) {
      console.log("Login successful! 🔓");
      // 3. Redirect to the future dashboard page
      navigate('/dashboard'); 
    } else {
      // 4. Show an error if they don't match
      alert("Invalid email or password. Please try again!");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg border-0 rounded-4 p-4 bg-dark text-white">
            <Card.Body>
              <div className="text-center mb-4">
                <h2 className="fw-bold">Admin Login</h2>
                <p className="text-secondary small">Access your messages</p>
              </div>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="small fw-medium">Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    className="bg-secondary border-0 text-white p-3 shadow-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="small fw-medium">Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className="bg-secondary border-0 text-white p-3 shadow-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Button variant="info" type="submit" className="w-100 p-3 fw-bold rounded-3 shadow">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;