import React, { useState, useEffect } from 'react';
import MasterLayout from '../components/MasterLayout';
import axios from 'axios';

const HomePage = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5555/read-food');
                console.log(response.data);
                setFoodItems(response.data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchData(); // Call the async function inside useEffect

        // Cleanup function (if needed)
        return () => {
            // Perform cleanup (if necessary)
        };
    }, []); // Empty dependency array to run effect only once on component mount

    return (
        <MasterLayout>
            <h2>This is Home Page</h2>
            <p>You are welcome here.</p>
            <div>
                {/* Render food items from state */}
                {foodItems.map((foodItem) => (
                    <div key={foodItem.foodCode}>
                        <p>Food Name: {foodItem.foodName}</p>
                        <p>Food Category: {foodItem.foodCategory}</p>
                        {/* Render other food item details as needed */}
                    </div>
                ))}
            </div>
        </MasterLayout>
    );
};

export default HomePage;
