import React, { useState } from 'react';
import { createBrowserHistory } from 'history';
import './LogStyles.css';
import { EmailRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Use createBrowserHistory from history library
  const history = createBrowserHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? '' : 'Invalid email address');
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setPasswordError(isValid ? '' : 'Password must be at least 6 characters');
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        // Check if the user email exists in the backend database
        const response = await axios.post('YOUR_BACKEND_API_CHECK_EXISTENCE_ENDPOINT', {
          email: email,
        });

        const data = response.data;

        if (data.emailExists) {
          // Perform your login logic here if the email exists
          console.log('Login successful');
          // Redirect to the home page after successful login
          history.push('/');
        } else {
          console.log('Login failed. Email does not exist in the database.');
        }
      } catch (error) {
        console.error('Error checking email existence:', error.message);
      }
    } else {
      console.log('Login failed. Please check your input.');
    }
  };

  return (
    <div className='Login'>
      <div className='Login-Box'>
        <form onSubmit={handleSubmit}>
          <div className='header-title'>
            <h2>Login</h2>
            <p>Please enter your correct details</p>
          </div>
          <Stack sx={{ width: '100%' }} spacing={2}>
            {emailError && (
              <Alert sx={{ backgroundColor: 'white' }} severity="error">
                {emailError}
              </Alert>
            )}
          </Stack>
          <div className='input-box'>
            <EmailRounded className='icon' />
            <input
              type='email'
              name='email' // Add name attribute
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              autoComplete='current-password'
              required
            />
            <label>Password</label>
          </div>
          <Stack sx={{ width: '100%' }} spacing={2}>
            {passwordError && (
              <Alert sx={{ backgroundColor: 'white' }} severity="error">
                {passwordError}
              </Alert>
            )}
          </Stack>
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
