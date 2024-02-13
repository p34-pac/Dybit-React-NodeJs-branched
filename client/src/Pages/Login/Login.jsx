import React, { useState } from 'react';
// import { createBrowserHistory } from 'history';
import './LogStyles.css';
import { EmailRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    // axios.get("http://localhost:3000/")
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('Login Successful!')
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  };

  return (
    <div className='Login'>
      <div className='Login-Box'>
        <form onSubmit={LoginUser}>
          <div className='header-title'>
            <h2>Login</h2>
            <p>Please enter your correct details</p>
          </div>
          <div className='input-box'>
            <EmailRounded className='icon' />
            <input
              type='email'
              name='email' // Add name attribute
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
              autoComplete='email'
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
              name='password' // Add name attribute
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value})}
              autoComplete='current-password'
              required
            />
            <label>Password</label>
          </div>
          <div className='remember-password'>
            <label>
              <input type='checkbox' className='check-box' /> Remember me
            </label>
            <a href='#'> Forgot password.?</a>
          </div>
          <button type='submit' className="bg-white text-black font-bold py-2 px-4 rounded-full">Login</button>
          <div className='register-link'>
            <p>
              Don't have an account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
