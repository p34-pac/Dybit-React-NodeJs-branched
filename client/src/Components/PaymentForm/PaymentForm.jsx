import React, { useState } from 'react';

function PaymentForm({ onAddFunds, onWithdrawFunds }) {
  const [amount, setAmount] = useState(0);

  const handleAddFunds = () => {
    if (amount > 0) {
      onAddFunds(amount);
      setAmount(0);
    } else {
      alert('Please enter a valid amount');
    }
  };

  const handleWithdrawFunds = () => {
    if (amount > 0) {
      onWithdrawFunds(amount);
      setAmount(0);
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div className="flex gap-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border rounded p-2 w-1/2"
      />
      <button onClick={handleAddFunds} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Funds
      </button>
      <button onClick={handleWithdrawFunds} className="bg-red-500 text-white px-4 py-2 rounded">
        Withdraw Funds
      </button>
    </div>
  );
}

export default PaymentForm;