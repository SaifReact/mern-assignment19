import React,  { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import LoginPage from './pages/LoginPage';
import FoodAdd from './pages/FoodAdd';
import FoodUpdate from './pages/FoodUpdate';
import { isAuthenticated } from './utility/Helper';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (user) => {
    setEmail(user);
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />} /> 
        <Route path="/create" element={!isAuthenticated() ? <Navigate to="/login" /> : <FoodAdd />} />
        <Route path="/update/:id" element={!isAuthenticated() ? <Navigate to="/login" /> : <FoodUpdate />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;