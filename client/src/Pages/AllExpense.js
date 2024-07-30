import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const renderSplitDetails = (expense) => {
    switch (expense.split_method) {
      case 'equal':
        return (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Split Details (Equal):</h3>
            {expense.participants.map(participant => (
              <p key={participant.user_id._id}>{participant.user_id.name}: {participant.amount_owed}</p>
            ))}
          </div>
        );

      case 'exact':
        return (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Split Details (Exact):</h3>
            {expense.splits.map(split => (
              <p key={split.user_id._id}>{split.user_id.name}: {split.amount}</p>
            ))}
          </div>
        );

      case 'percentage':
        return (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Split Details (Percentage):</h3>
            {expense.splits.map(split => (
              <p key={split.user_id._id}>{split.user_id.name}: {split.percentage}%</p>
            ))}
          </div>
        );

      default:
        return <p>No split details available.</p>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Expenses</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id} className="mb-4 p-4 bg-white rounded shadow">
            <p><strong>Description:</strong> {expense.description}</p>
            <p><strong>Total Amount:</strong> {expense.total_amount}</p>
            <p><strong>Paid By:</strong> {expense.paid_by.name}</p>
            <p><strong>Split Method:</strong> {expense.split_method.charAt(0).toUpperCase() + expense.split_method.slice(1)}</p>
            {renderSplitDetails(expense)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllExpenses;
