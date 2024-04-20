import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { token } from '../utility/Helper';
import { useNavigate } from 'react-router-dom';



const FoodForm = () => {

  const navigate = useNavigate();



      const AddedToServer = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataJSON = {};
        formData.forEach((value, key) => {
            formDataJSON[key] = value;
        });

        try {
          const response = await axios.post('http://localhost:5050/api/v1/add-food', formDataJSON, {
            headers: {
                token: token 
            }
        });
         
        toast(response.data.response);
        if(response.data.status == 'success'){
          navigate('/');
        }

        } catch (error) {
          console.error('Error:', error);
        }
    };
   

    return (
            <Container className="bg-white shadow-md rounded p-4">
              <h1 className="text-dark font-weight-bold mb-4">Add Food Item</h1>
              <ToastContainer />
              <Form onSubmit={AddedToServer}>
                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group controlId="foodName">
                      <Form.Label>Food Name</Form.Label>
                      <Form.Control type="text" name='foodName' placeholder="Enter Food Name" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="foodCode">
                      <Form.Label>Food Code</Form.Label>
                      <Form.Control type="text" name='foodCode' placeholder="Enter Food Code" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="foodImg">
                      <Form.Label>Food Image URL</Form.Label>
                      <Form.Control type="text" name='foodImg' placeholder="Enter Food Image URL" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group controlId="foodCategory">
                      <Form.Label>Food Category</Form.Label>
                      <Form.Control type="text" name='foodCategory' placeholder="Enter Food Category" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="foodQuantity">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control type="text" name='foodQuantity' placeholder="Enter Quantity" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="foodPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" name='foodPrice' placeholder="Enter Price" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              
            </Container>
        
    );
};

export default FoodForm;