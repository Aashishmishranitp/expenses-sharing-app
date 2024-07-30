import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [splitMethod, setSplitMethod] = useState('equal');
  const [participants, setParticipants] = useState([]);
  const [users, setUsers] = useState([]);
  const [splitDetails, setSplitDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the backend
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSplitDetailsChange = (index, field, value) => {
    setSplitDetails({
      ...splitDetails,
      [index]: {
        ...splitDetails[index],
        [field]: value
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      name: expenseName,
      amount: parseFloat(amount),
      payer,
      splitMethod,
      participants: participants.map(id => ({
        userId: id,
        ...splitDetails[id]
      }))
    };

    axios.post('/api/expenses/add', expenseData)
      .then(response => {
        console.log('Expense added successfully:', response.data);
        navigate('/expenses'); // Redirect to expenses page after adding expense
      })
      .catch(error => console.error('Error adding expense:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="expenseName" className="block text-sm font-medium text-gray-700">Expense Name</label>
          <input
            type="text"
            id="expenseName"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="payer" className="block text-sm font-medium text-gray-700">Payer</label>
          <select
            id="payer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="" disabled>Select payer</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Split Method</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="equal"
                checked={splitMethod === 'equal'}
                onChange={(e) => setSplitMethod(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Equal</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="exact"
                checked={splitMethod === 'exact'}
                onChange={(e) => setSplitMethod(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Exact</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="percentage"
                checked={splitMethod === 'percentage'}
                onChange={(e) => setSplitMethod(e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Percentage</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Participants</label>
          <select
            id="participants"
            multiple
            value={participants}
            onChange={(e) => setParticipants(Array.from(e.target.selectedOptions, option => option.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
        </div>
        {splitMethod !== 'equal' && participants.map((participantId, index) => {
          const user = users.find(user => user._id === participantId);
          return (
            <div key={participantId} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{user ? user.name : ''}</label>
              <input
                type="number"
                value={splitDetails[participantId]?.value || ''}
                onChange={(e) => handleSplitDetailsChange(participantId, 'value', e.target.value)}
                placeholder={splitMethod === 'exact' ? 'Amount' : 'Percentage'}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
