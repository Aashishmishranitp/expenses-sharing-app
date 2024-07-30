import React from 'react'
import { Link } from 'react-router-dom'
import Group from './GroupPage.js'
const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Expenses Sharing App</h1>
        <Group />
        <Link to="/group/create" className="bg-blue-600 text-white px-4 py-2 rounded">Create a Group</Link>
      </div>    )
}

export default HomePage