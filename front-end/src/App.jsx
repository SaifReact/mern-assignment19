import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import FoodAdd from './pages/FoodAdd';
import FoodUpdate from './pages/FoodUpdate';

const App = () => {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <HomePage /> } /> 
        <Route path="/create" element={ <FoodAdd />} />
        <Route path="/update/:id" element={ <FoodUpdate />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;