import React from 'react'
import Header from '../others/Header'
import NumberedTaskList from '../others/NumberedTaskList'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
        <Header/>
        <NumberedTaskList/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard