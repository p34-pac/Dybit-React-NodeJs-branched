import React, { useState } from 'react';
import './BottomPopoverButton.css';
import { Link } from 'react-router-dom';
import { FaRing, FaUser } from 'react-icons/fa';
import { Dashboard, People } from '@mui/icons-material';

const BottomPopoverButton = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
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
          <Link to="/profile" className='nav-toggler-links'><FaRing className='link-icons'/>Tasks center</Link>
          <Link to="/profile" className='nav-toggler-links'><People className='link-icons'/>Contact Us</Link>
          <button className='Login-Logout-btn'>Logout</button>
        </div>
      )}
    </div>
  );
};

export default BottomPopoverButton;
