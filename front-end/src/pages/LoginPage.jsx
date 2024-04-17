import LoginForm from '../components/LoginForm';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="login-container"> 
            {<LoginForm />}
        </div>
    );
};

export default LoginPage;