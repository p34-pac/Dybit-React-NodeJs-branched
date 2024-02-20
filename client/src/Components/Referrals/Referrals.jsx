import React, { useContext, useEffect } from 'react';
import './Referrals.css'
import { FaTrophy } from 'react-icons/fa'
import { People } from '@mui/icons-material'
import { UserContext } from '../../../context/userContext';
// import toast from 'react-hot-toast';

function Referrals() {
    const { user, fetchUser } = useContext(UserContext);

    useEffect(() => {
        fetchUser();
    }, []); 


  return (
      <section className='Referrals-counts-container'>
          <div className='Row'>
              <div className='Ref-Icons-container'>
                  <FaTrophy className='FaTrophy'/>
                  <h2>Referrals</h2>
              </div>
              <div className='Icon-count'>
                  <People />
                  {user ? (<h2>{user.__v}</h2>) : (<h2>0</h2>)}
              </div>
          </div>
          <div className='Referals-counts'>
          {user ? (<span className='Counter'>{user.__v}</span>) : (<span className='Counter'>0</span>)}
                
            </div>
            <div className='ReferBtn-container'>
                <span>Refer more to earn more.</span>
                <button className='Refer-btn'>Copy Link</button>
            </div>
      </section>
  )
}

export default Referrals