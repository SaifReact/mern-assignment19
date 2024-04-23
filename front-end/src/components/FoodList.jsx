import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryLoader from '../loader/PrimaryLoader';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const FoodList = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5050/api/v1/read-food`);
            setFoodItems(response.data.response);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:5050/api/v1/delete-food/${id}`);

                    if (response.data.status === 'success') {
                        Swal.fire(
                            "Deleted!",
                            response.data.response,
                            "success"
                        );
                        setRefresh(!refresh);
                    } else {
                        Swal.fire(
                            "Failed!",
                            response.data.response,
                            "error"
                        );
                    }
                } catch (error) {
                    console.error('Error deleting data:', error);
                    throw error;
                }
            }
        });
    };

    return (
        <>

        {loader ? (
            <PrimaryLoader />
        ) : (
            Array.isArray(foodItems) && foodItems.length > 0 ? (
                foodItems.map((item, index) => (
                    <div key={index} className="col-md-3 col-sm-6 col-12">
                        <div className="card food-card">
                            <img src={item.foodImg} className="card-img-top" alt={item.foodName} />
                            <div className="price-tag">TK: {item.foodPrice}</div>
                            <div className="card-body">
                                <h5 className="card-title">{item.foodName}</h5>
                                <Link to={`/update/${item._id}`} className="btn btn-edit m-1">Edit</Link>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-delete m-1">Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No food items found.</p>
            )
        )}
        </>
    );
};

export default FoodList;