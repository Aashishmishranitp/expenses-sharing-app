import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Group = () => {
  const { id } = useParams();  // Assuming the route uses "id" for the group
  const [group, setGroup] = useState(null);

  useEffect(() => {
    axios.get(`/groups/${id}`)
      .then(response => setGroup(response.data))
      .catch(error => console.error('Error fetching group details:', error));
  }, [id]);

  if (!group) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Group: {group.group_name}</h1>
      <h2 className="text-xl mb-4">Members</h2>
      <ul>
        {group.members.map(member => (
          <li key={member.user_id._id}>{member.user_id.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Group;
