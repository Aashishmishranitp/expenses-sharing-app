import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BalanceSheet = () => {
  const [balanceSheet, setBalanceSheet] = useState([]);

  useEffect(() => {
    axios.get('/api/expenses/download-balance-sheet?groupId=YOUR_GROUP_ID')
      .then(response => setBalanceSheet(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Balance Sheet</h1>
      {balanceSheet.map((balance, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded shadow">
          <h2 className="text-xl mb-2">User: {balance.user}</h2>
          <ul>
            {balance.balances.map((b, i) => (
              <li key={i}>{b.withUser}: {b.balance}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BalanceSheet;
