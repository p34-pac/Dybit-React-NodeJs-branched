import React from 'react'
import BottomPopoverButton from '../Popover-btn/BottomPopoverButton'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <header className='Header'>
      <nav className='Nav'>
        <Link to="/dashboard">
          <label className='Logo'>DYB<span>I</span>T</label>
        </Link>
        <div className="Dashboard-links hidden md:flex gap-4">
          <Link to="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
          <Link to="/referrals" className="text-sm font-medium hover:underline underline-offset-4">
            Referrals
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
        </div>
     </nav>
     <BottomPopoverButton/>
    </header>
  )
}

export default Navbar