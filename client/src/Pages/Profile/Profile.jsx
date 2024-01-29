import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import BottomNavBar from '../../Components/BottomNavbar/BottomNavbar'
import "./Profile.css"

function Profile() {
  return (
      <div className='Profile-container'>
          <Navbar />
           <span>Other components</span>
          <BottomNavBar/>
      </div>
  )
}

export default Profile