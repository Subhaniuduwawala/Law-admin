import React from 'react';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Attorneys from './Attorneys';
import ContactUs from './ContactUs';
import Admin from './Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/attorneys' element={<Attorneys />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path="/admin" element={<Admin />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;