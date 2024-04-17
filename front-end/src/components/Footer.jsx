import React from 'react';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Pathshala App. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;