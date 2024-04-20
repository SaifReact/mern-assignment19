import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { token } from '../utility/Helper';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryLoader from '../loader/PrimaryLoader';


const FoodUpdateForm = () => {

      const {id} = useParams();
      const navigate = useNavigate();
      const [foodInfo, setFoodInfo] = useState({foodName: '', foodCode: '', foodImg: '', foodCategory: '', foodQuantity: '', foodPrice: '' });
      const [loader, setLoader] = useState(true);

      useEffect(() => {
        recieveData(id);
      }, [id]); 



      const UpdateToServer = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataJSON = {};
        formData.forEach((value, key) => {
            formDataJSON[key] = value;
        });

        try {
          const response = await axios.put(`http://localhost:5050/api/v1/update-food/${id}`, formDataJSON, {
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
   
    
    const recieveData = async (id) => {
      try {
          const response = await axios.get(`http://localhost:5050/api/v1/read-food/${id}`, {
            headers: {
                token: token 
            }
        });
        setFoodInfo(response.data.response);
        setLoader(false)
      }catch (error) {
        console.error('Error:', error);
      }
    }

    const inputChange = (event) => {
      const { name, value } = event.target;
      setFoodInfo({...foodInfo, [name]: value});
    }

    return (
            <Container className="bg-white shadow-md rounded p-4">
              <h1 className="text-dark font-weight-bold mb-4">Update Food Item</h1>
              <ToastContainer />

              {loader ? (<PrimaryLoader />) : (
                <Form onSubmit={UpdateToServer}>
                  <Row className="mb-3">
                    <Col md={4}>
                      <Form.Group controlId="foodName">
                        <Form.Label>Food Name</Form.Label>
                        <Form.Control type="text" name='foodName' placeholder="Enter Food Name" value={foodInfo.foodName} onChange={inputChange} />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="foodCode">
                        <Form.Label>Food Code</Form.Label>
                        <Form.Control type="text" name='foodCode' placeholder="Enter Food Code" value={foodInfo.foodCode} onChange={inputChange}  />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="foodImg">
                        <Form.Label>Food Image URL</Form.Label>
                        <Form.Control type="text" name='foodImg' placeholder="Enter Food Image URL" value={foodInfo.foodImg} onChange={inputChange}  />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}>
                      <Form.Group controlId="foodCategory">
                        <Form.Label>Food Category</Form.Label>
                        <Form.Control type="text" name='foodCategory' placeholder="Enter Food Category" value={foodInfo.foodCategory} onChange={inputChange}  />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="foodQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" name='foodQuantity' placeholder="Enter Quantity" value={foodInfo.foodQuantity} onChange={inputChange}  />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="foodPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name='foodPrice' placeholder="Enter Price" value={foodInfo.foodPrice} onChange={inputChange}  />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
              
            
            </Container>
        
    );
};

export default FoodUpdateForm;