import LoginForm from '../components/LoginForm';
import React from 'react';

const LoginPage = ({ onLogin }) => {
    return (
        <div className="login-container"> 
            {<LoginForm   onLogin={onLogin}/>}
        </div>
    );
};

export default LoginPage;