import React from 'react'
import './Referrals.css'
import { FaTrophy } from 'react-icons/fa'
import { People } from '@mui/icons-material'

function Referrals() {
  return (
      <section className='Referrals-counts-container'>
          <div className='Row'>
              <div className='Ref-Icons-container'>
                  <FaTrophy className='FaTrophy'/>
                  <h2>Referrals</h2>
              </div>
              <div className='Icon-count'>
                  <People />
                  <h2>0</h2>
              </div>
          </div>
            <div className='Referals-counts'>
                <span className='Counter'>0</span>
            </div>
            <div className='ReferBtn-container'>
                <span>Refer more to earn more.</span>
                <button className='Refer-btn'>Copy Link</button>
            </div>
      </section>
  )
}

export default Referrals