import React from 'react'

const NumberedTaskList = ({user}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{user.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{user.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{user.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{user.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
        
    </div>
  )
}

export default NumberedTaskList