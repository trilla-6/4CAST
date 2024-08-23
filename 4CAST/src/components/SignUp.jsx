import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle form submission, such as sending data to a backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
