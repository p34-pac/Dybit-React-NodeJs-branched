import React, { useContext, useEffect } from 'react';
import './ProfileNav.css'
import { UserContext } from '../../../context/userContext';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function ProfileNav() {
    const { user, fetchUser } = useContext(UserContext);
    useEffect(() => {
        fetchUser();
    }, []);
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
              {user ? (<b>₦{user.balance}</b>) :(<b>Loading...</b>)}
            <div className='Balance-hider'>
                  <AccountBalanceWalletIcon className='Hider-btn'/>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav