import React, { useState, useEffect } from 'react';
import { EmailRounded, FaceRetouchingNaturalRounded, VerifiedUserRounded, VisibilityOff, Visibility } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import '../Login/LogStyles.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    referralLink: '',
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const referralCode = queryParams.get('referralCode');
    if (referralCode) {
      setData(prevData => ({ ...prevData, referralLink: referralCode }));
    }
  }, [location.search, setData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, referralLink, password } = data;
    setLoading(true);
    try {
      const response = await axios.post("/register", {
        name, email, referralLink, password
      });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          name: '',
          email: '',
          password: '',
          referralLink: responseData.referralLink
        });
        toast.success('Registration Successful!');
        navigate('/login');
      } 
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
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
            <FaceRetouchingNaturalRounded className='icon'/>
            <input
              type='text'
              name='referralLink'
              value={data.referralLink}
              onChange={(e) => setData({...data, referralLink: e.target.value})}
              readOnly // input read-only
            />
            <label>Referral code {location.search && `(from URL: ${data.referralLink})`}</label>
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
