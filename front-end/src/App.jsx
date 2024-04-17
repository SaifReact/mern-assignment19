import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import BookList from './pages/BookList';
import BookAdd from './pages/BookAdd';
import BookEdit from './pages/BookEdit';

const App = () => {

  
  const userLoggedIn = false;




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={userLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/book-add" element={<BookAdd />} />
        <Route path="/book-edit" element={<BookEdit />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;