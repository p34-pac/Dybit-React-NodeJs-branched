/* eslint-disable no-unused-vars */
import React from 'react'
import './ProfileMain.css'
import UserStats from '../UserStats/UserStats'
import ProfileReferences from '../ProfileReferences/ProfileReferences'

function ProfileMain() {
  return (
    <div className='profile-main'>
        <UserStats />
        <ProfileReferences />
    </div>
  )
}

export default ProfileMain