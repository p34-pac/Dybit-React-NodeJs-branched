import React, { useState } from 'react';
import { EmailRounded, FaceRetouchingNaturalRounded, VerifiedUserRounded, VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../Login/LogStyles.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


// SignUp functional component
export const SignUp = () => {
  const navigate = useNavigate();
  // State variables for form data, errors, submission status, and error message
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    referralCode: '',
    password: '',
  });

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, referralCode, password } = data
    try {
      const {data} = await axios.post("http://localhost:3000/register", {
        name, email, referralCode, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Registration Successful!')
        navigate('/login')
      } 
    } catch (error) {
      console.log(error)
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Return JSX for the SignUp component
  return (
    <div className='Login'>
      <div className='Login-Box'>
        <form onSubmit={handleSubmit}>
          <div className='header-title'>
            <h2>Register</h2>
            <p>Please enter your details to create an account</p>
          </div>
          {/* renderAlerts() */}
          <div className='input-box'>
            <VerifiedUserRounded className='icon'/>
            <input
              type='text'
              name='fullName'
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
              name='referralCode'
              value={data.referralCode}
              onChange={(e) => setData({...data, referralCode: e.target.value})}
            />
            <label>Referral code (optional)</label>
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
          <button type='submit' className="BTN-REG bg-white text-black font-bold py-2 px-4 rounded-full">
            Register
          </button>
          <div className='register-link'>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
