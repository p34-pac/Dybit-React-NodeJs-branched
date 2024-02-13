import React from 'react';
import './AddFunds.css';


function AddFunds() {

  return (
    <section className='Payment-card-container'>
        <div className='AccountNumber-container'>
            <div className='AccountNumber'>
                <span>Tier One</span>
                <span className='Account-Number'>2067674112</span> 
            </div>
            <div className='Balance-hider'>
                <button className='Hider-btn'>Hide Balance</button>
            </div>
        </div>
        <div className='Amount-container'>
              <span className='Amount-counts'>$0</span>
        </div>
        <div className='AddFunds-Withdraw-btns'>
            <button className='AddFunds'>Add Funds</button>
            <button className='Withdraw'>Withdraw </button>
        </div>
    </section>
  );
}
export default AddFunds;