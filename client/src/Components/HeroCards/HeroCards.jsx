import React from 'react'
import './HeroCards.css'
import AddFunds from '../AddFunds/AddFunds'
import Referrals from '../Referrals/Referrals'

function HeroCards() {
  return (
      <div className='HeroCards md:flex justify-center align-center'>
          <AddFunds/>   
          <Referrals />
      </div>
  )
}

export default HeroCards