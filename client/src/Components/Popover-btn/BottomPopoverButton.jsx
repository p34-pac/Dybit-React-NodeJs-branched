import React, { useState } from 'react';
import './BottomPopoverButton.css';
import { Link } from 'react-router-dom';
import { FaRing, FaUser } from 'react-icons/fa';
import { Dashboard, People } from '@mui/icons-material';
import { useUserContext } from '../../../context/userContext';

const BottomPopoverButton = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { isLoggedIn, logout } = useUserContext();

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleLogout = async () => {
    try {
      await logout(() => {
        // Redirect to login page
        window.location.href = '/login';
      });
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="bottom-popover-container">
      <button className="bottom-popover-button" onClick={togglePopover}>
        <FaUser className='User-Toggler'/>
      </button>
      {popoverVisible && (
        <div className="bottom-popover-content">
          <div className='div-line'>.</div>
          <Link to="/dashboard" className='nav-toggler-links'><Dashboard className='link-icons'/> Dashboard</Link>
          <Link to="/profile" className='nav-toggler-links'><FaUser  className='link-icons'/> Profile</Link>
          <Link to="/tasks" className='nav-toggler-links'><FaRing className='link-icons'/>Tasks center</Link>
          <Link to="/contacts" className='nav-toggler-links'><People className='link-icons'/>Contact Us</Link>
          {isLoggedIn ? (
            <button className='Login-Logout-btn' onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className='Login-Logout-btn'>Login</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default BottomPopoverButton;
