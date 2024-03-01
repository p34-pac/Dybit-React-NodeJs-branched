import React, { useState } from 'react';
import { EmailRounded, VerifiedUserRounded, VisibilityOff, Visibility } from '@mui/icons-material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { FaShareNodes } from "react-icons/fa6";
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
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    referralCode: '',
    phoneNumber: '' // New field for phone number
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, middleName, lastName, email, password, referralCode, phoneNumber } = data;
    setLoading(true);
    try {
      const response = await axios.post("/register", { firstName, middleName, lastName, email, password, referralCode, phoneNumber });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ firstName: '', middleName: '', lastName: '', email: '', password: '', referralCode: '', phoneNumber: '' }); // Reset phoneNumber and referralCode
        toast.success('Registration Successful!');
        navigate('/login');
      } 
    } catch (error) {
      toast.error(error?.response?.data?.error);
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
            <PermIdentityIcon className='icon'/>
            <input
              type='text'
              name='firstName'
              value={data.firstName}
              onChange={(e) => setData({...data, firstName: e.target.value})}
              required
            />
            <label>First Name</label>
          </div>
          {/* Similar input boxes for middleName and lastName */}
          <div className='input-box'>
            <FamilyRestroomIcon className='icon'/>
            <input
              type='text'
              name='lastName'
              value={data.lastName}
              onChange={(e) => setData({...data, lastName: e.target.value})}
              required
            />
            <label>Last Name</label>
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
          <div className='input-box'>
            <FaShareNodes className='icon'/>
            <input
              type='text'
              name='referralCode'
              value={data.referralCode}
              onChange={(e) => setData({...data, referralCode: e.target.value})}
            />
            <label>Referral Code (optional)</label>
          </div>
          {/* New input box for phone number */}
          <div className='input-box'>
            <FaShareNodes className='icon'/>
            <input
              type='text'
              name='phoneNumber'
              value={data.phoneNumber}
              onChange={(e) => setData({...data, phoneNumber: e.target.value})}
            />
            <label>Phone Number</label>
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
