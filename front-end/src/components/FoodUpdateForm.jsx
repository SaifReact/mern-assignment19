import React, { useState, useEffect } from 'react';
import {Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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

        if(!foodInfo.foodName || !foodInfo.foodCode || !foodInfo.foodImg || !foodInfo.foodCategory || !foodInfo.foodQuantity || !foodInfo.foodPrice){
          return toast.error('Please fill all fields', {position: "top-center"});
        }


        try {
          const response = await axios.put(`http://localhost:5050/api/v1/update-food/${id}`, foodInfo);

          if(response.data.status == 'success'){
            toast.success(response.data.response,{position: "top-center"})
            navigate('/');
          }

        } catch (error) {
          console.error('Error:', error);
        }
    };
   
    
    const recieveData = async (id) => {
      try {
          const response = await axios.get(`http://localhost:5050/api/v1/read-food/${id}`);
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
          <>
           <ToastContainer />
              {loader ? (<PrimaryLoader />) : (
                <Form onSubmit={UpdateToServer}>
                  <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="foodName">
                    <Form.Label className="form-label">Food Name</Form.Label>
                    <Form.Control value={foodInfo.foodName} onChange={inputChange} type="text" name='foodName' placeholder="Enter Food Name" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="foodCode">
                    <Form.Label className="form-label">Food Code</Form.Label>
                    <Form.Control value={foodInfo.foodCode} onChange={inputChange} type="text" name='foodCode' placeholder="Enter Food Code" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="foodImg">
                    <Form.Label className="form-label">Food Image URL</Form.Label>
                    <Form.Control value={foodInfo.foodImg} onChange={inputChange} type="text" name='foodImg' placeholder="Enter Food Image URL" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="foodCategory">
                    <Form.Label className="form-label">Food Category</Form.Label>
                    <Form.Control value={foodInfo.foodCategory} onChange={inputChange} type="text" name='foodCategory' placeholder="Enter Food Category" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="foodQuantity">
                    <Form.Label className="form-label">Quantity</Form.Label>
                    <Form.Control value={foodInfo.foodQuantity} onChange={inputChange} type="text" name='foodQuantity' placeholder="Enter Quantity" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="foodPrice">
                    <Form.Label className="form-label">Price</Form.Label>
                    <Form.Control value={foodInfo.foodPrice} onChange={inputChange} type="text" name='foodPrice' placeholder="Enter Price" />
                  </Form.Group>
                </Col>
              </Row>
                  <div className="d-flex">
                  <button className=' btn-food' type="submit">
                      Update
                    </button>
                  </div>
                </Form>
              )}
 
 </>
    );
};

export default FoodUpdateForm;