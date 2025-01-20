import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashboard = ({user, setUser}) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header user={user} setUser={setUser}/> 
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard