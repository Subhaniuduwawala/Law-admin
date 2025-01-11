import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';
import img6 from './assets/img6.jpg';
import logo1 from './assets/logo1.jpg';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        if (res.status === 200) {
          if(res.data.user.type === 'admin') {
            alert("Welcome Admin");
            // navigate("/");
          }
          navigate('/home'); // Ensure this path matches the home route in App.js
        } else {
          alert("No record existed");
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          alert("Incorrect");
        }
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: `url(${img6})`, backgroundSize: 'cover' }}>
      <div className='bg-black p-3 rounded w-25'>
        <div className="logo">
          <img src={logo1} alt="LawAdmin Logo" />
          <span style={{ color: 'white' }}>LawAdmin</span>
        </div>
        <h2 style={{ color: 'orange' }}><strong>Sign-In</strong></h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" style={{ color: 'white' }}><strong>Email</strong></label>
            <input type="email" placeholder='enter Email' name='email'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password" style={{ color: 'white' }}><strong>Password</strong></label>
            <input type="password" placeholder='enter Password' name='password'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' style={{ backgroundColor: 'orange' }}><strong>Log in</strong></button>
          <p style={{ color: 'white' }}>You are agree to our terms and policies</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-white rounded-0 text-decoration-none' style={{ color: 'black' }}>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;