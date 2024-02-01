/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import BottomNavBar from '../../Components/BottomNavbar/BottomNavbar'
import "./Profile.css"
import ProfileHero from '../../Components/ProfileHero/ProfileHero'
import ProfileMain from '../../Components/ProfileMain/ProfileMain'

function Profile() {
  return (
      <div className='Profile-container'>
          <Navbar />
           <ProfileHero />
           <ProfileMain />
          <BottomNavBar/>
      </div>
  )
}

export default Profile