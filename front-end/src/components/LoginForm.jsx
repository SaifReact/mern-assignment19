import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const LoginForm = () => {
    return (
            <Container className="d-flex justify-content-center">
                <Form className="login-form">
                    <h2 className='d-flex justify-content-center mb-5'>Login to Admin Panel</h2>
                    <Form.Group controlId="form2Example1" className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Type your email address here" />
                    </Form.Group>

                    <Form.Group controlId="form2Example2" className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Type your password here" />
                    </Form.Group>

                    <Row className="mb-4">
                        <Col className="d-flex justify-content-center">
                            <Form.Check type="checkbox" label="Remember me" defaultChecked />
                        </Col>

                        <Col>
                            <a href="#!" className="text-decoration-none">Forgot password?</a>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit" className="btn-block mb-4">Sign in</Button>
                </Form>
            </Container>
    );
};

export default LoginForm;