/* eslint-disable no-unused-vars */
import React from 'react'
import './ProfileNav.css'

function ProfileNav() {
  return (
    <div className='profile-nav'>
        <div className='tier-btn'>
            <button>Tier one</button>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 9H14.25" stroke="#000000" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.75 13.5L14.25 9" stroke="#000000" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.75 4.5L14.25 9" stroke="#000000" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
        <div className='balance'>
            <b>$15,000:53</b>
            {/* added balance hider, this can be converted to it's own component, cause of repetition */}
            <div className='Balance-hider'>
                <button className='Hider-btn'>Hide Balance</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav