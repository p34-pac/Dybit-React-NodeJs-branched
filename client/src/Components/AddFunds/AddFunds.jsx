import React, { useContext, useEffect, useState } from 'react';
import './AddFunds.css';
import { UserContext } from '../../../context/userContext';
// import { StarRate } from '@mui/icons-material';

function AddFunds() {
    const { user, fetchUser } = useContext(UserContext);
    const [showBalance, setShowBalance] = useState(false);

    useEffect(() => {
        fetchUser();
    }, []); 

    const balanceVisibility = () => {
        setShowBalance(!showBalance);
    };

    return (
        <section className='Payment-card-container'>
            <div className='AccountNumber-container'>
                <div className='AccountNumber'>
                    <span>Tier One</span>
                    <span className='Account-Number'>2067674112</span> 
                </div>
                <div className='Balance-hider'>
                    <button className='Hider-btn' onClick={balanceVisibility}>
                        {showBalance ? 'Hide Balance' : 'Show Balance'}
                    </button>
                </div>
            </div>
            <div className='Amount-container'>
                {user && (showBalance ? <span className='Amount-counts'>${user.balance}</span> : <b className='Stars'>*****</b>)}
            </div>
            <div className='AddFunds-Withdraw-btns'>
                <button className='AddFunds'>Add Funds</button>
                <button className='Withdraw'>Withdraw </button>
            </div>
        </section>
    );
}

export default AddFunds;
