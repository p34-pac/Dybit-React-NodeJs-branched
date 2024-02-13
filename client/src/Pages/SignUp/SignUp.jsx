import React, { useState } from 'react';
import { EmailRounded, VerifiedUserRounded, VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../Login/LogStyles.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    setLoading(true);
    try {
      const response = await axios.post("/register", { name, email, password });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration Successful!');
        navigate('/login');
      } 
    } catch (error) {
      toast.error('An error occurred. Please try again later.', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='Login'>
      <div className='Login-Box'>
        <form onSubmit={handleSubmit}>
          <div className='header-title'>
            <h2>Register</h2>
            <p>Please enter your details to create an account</p>
          </div>
          <div className='input-box'>
            <VerifiedUserRounded className='icon'/>
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={(e) => setData({...data, name: e.target.value})}
              required
            />
            <label>Full Name</label>
          </div>
          <div className='input-box'>
            <EmailRounded className='icon'/>
            <input
              type='email'
              name='email'
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
              required
            />
            <label>Email</label>
          </div>
          <div className='input-box'>
            <div onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff className='icon' /> : <Visibility className='icon' />}
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}
              required
            />
            <label>Password</label>
          </div>
          <button type='submit' className={`BTN-REG bg-white text-black font-bold py-2 px-4 rounded-full ${loading ? 'disabled' : ''}`} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className='register-link'>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
