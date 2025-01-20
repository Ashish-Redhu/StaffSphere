import React from 'react'
import Header from '../others/Header'
import NumberedTaskList from '../others/NumberedTaskList'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = ({user, setUser}) => {
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header user={user} setUser={setUser}/>
        <NumberedTaskList user={user}/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard