import { Link } from 'react-router-dom';
import MasterLayout from '../components/MasterLayout';
import React from 'react';

const Error404 = () => {
    return (
        <MasterLayout>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>404 - Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">Go to Home</Link>
            </div>
        </MasterLayout>
    );
};

export default Error404;