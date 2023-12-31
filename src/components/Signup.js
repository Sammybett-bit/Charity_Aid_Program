import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom'; 
import Footer from './Footer';
 import './Signup.css';

const Signin = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://charity-0d32.onrender.com/users', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phonenumber: formData.phonenumber,
      });

      alert('signup Successful!');
      navigate('/login'); //redirect to login
    } catch (error) {
      console.error('Error registering user:', error);
      alert(`Error registering user: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <h2>Signin here!</h2>
      <form onSubmit={handleSigninSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='btn-sign'>Signin</button>
      </form>
      <Footer/>
    </div>
  );
};

export default Signin;