import React from 'react'

const Header = ({user, setUser}) => {
  const handleLogout = () => {
    setUser(null);
  }
  return (
    <div className='flex items-end justify-between p-5'>
        <h1 className='text-2xl font-medium '>Hello <br/> <span className='text-3xl font-semibold '>{user.firstname} 👋 </span> </h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Header