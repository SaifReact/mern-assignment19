import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const navigate  = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const LogInUser = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return toast.error('Please fill in all fields');
    }

    try {
      const response = await axios.put('http://localhost:5050/api/v1/login', { email, password });
      const responseData = response.data;
      
      if (responseData.status === 'success') {
        localStorage.setItem('token', responseData.token);
        toast.success(responseData.response);
        // onLogin(email);
        navigate('/'); 
      } else {
        toast.error(responseData.response);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while logging in');
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={LogInUser} className="login-form">
        <h4 className="d-flex justify-content-center mb-5">Welcome to Food Gallery</h4>
        <ToastContainer position="top-center" />
        <Form.Group controlId="email" className="mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type your email address here"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Type your password here"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Row className="mb-4">
          <Col className="d-flex">
            <Form.Check type="checkbox" label="Remember me" defaultChecked />
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="btn-block mb-4">
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
