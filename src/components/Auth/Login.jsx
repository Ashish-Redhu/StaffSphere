import React from 'react'
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail('');
    setPassword('');
 }
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