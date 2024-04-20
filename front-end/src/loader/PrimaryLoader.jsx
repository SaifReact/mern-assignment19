import React from 'react';
import loader from '../assets/icon/loader.svg'; // Import the loader SVG file

const PrimaryLoader = () => {
    return (
        <div className="loader-container"> 
            <img src={loader} alt="Loader" width="100" height="100" /> 
        </div>
    );
};

export default PrimaryLoader;
