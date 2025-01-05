import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from './LoginValidation';
import logo1 from './assets/logo1.jpg';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    setErrors(prev => ({ ...prev, [event.target.name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.status === 200) {
            navigate('/home');
          } else {
            alert("No record existed");
          }
        })
        .catch(err => {
          if (err.response && err.response.status === 401) {
            alert("Incorrect email or password");
          }
        });
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
      <div className="logo">
        <img src={logo1} alt="LawAdmin Logo" />
        LawAdmin
      </div>
      <div className='bg-black p-3 rounded w-25'>
        <h2 style={{ color: 'orange' }}><strong>Sign-In</strong></h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' style={{ backgroundColor: 'orange' }}><strong>Log in</strong></button>
          <p>You agree to our terms and policies</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login