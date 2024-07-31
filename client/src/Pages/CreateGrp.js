import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the backend
    axios.get('/users/all-user')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserSelection = (event) => {
    const selectedUserId = event.target.value;
    if (!selectedUsers.includes(selectedUserId)) {
      setSelectedUsers([...selectedUsers, selectedUserId]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const groupData = {
      group_name: groupName,
      members: selectedUsers
    };
    console.log(groupData);

    try {
      await axios.post('/groups/create', groupData);
      message.success('Group created successfully');
      navigate('/'); // Redirect to homepage or groups page after creation
    } catch (error) {
      message.error('Something went wrong');
      console.error('Error creating group:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Group</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="members" className="block text-sm font-medium text-gray-700">Add Members</label>
          <select
            id="members"
            onChange={handleUserSelection}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled defaultValue>Select members</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
          <div className="mt-2">
            {selectedUsers.map(userId => {
              const user = users.find(user => user._id === userId);
              return (
                <span key={userId} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                  {user ? user.name : ''}
                </span>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
