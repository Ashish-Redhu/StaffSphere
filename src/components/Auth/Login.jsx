import React, { useContext } from 'react'
import { useState } from "react"
import { AuthContext } from '../../context/AuthProvider'
const Login = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = useContext(AuthContext);
    // console.log("data in login is: ", data); // This will show the structure of data

    const handleSubmit = (e) => {
    e.preventDefault();

    // Check if data is not null and is an object
    if (data && typeof data === 'object') {
      // Check in adminData
      const adminUser  = data.adminData.find(user => user.email === email && user.password === password);
      if (adminUser ) {
        setUser (adminUser );
        setEmail('');
        setPassword('');
        return;
      }

      // Check in employeesData
      const employeeUser  = data.employeesData.find(user => user.email === email && user.password === password);
      if (employeeUser ) {
        setUser (employeeUser );
        setEmail('');
        setPassword('');
        return;
      }
    }

    alert('Invalid credentials');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 rounded-md p-20 '>
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className='flex flex-col items-center justify-center'
            >
                <input required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent' type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input required className='border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl text-white outline-none bg-transparent' type="password" placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className='mt-5 rounded-full py-3 px-5 text-lg w-full text-white font-semibold outline-none bg-emerald-600 hover:bg-emerald-800' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login