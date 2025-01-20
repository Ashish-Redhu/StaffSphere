import React, { useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      {!user ? <Login setUser={setUser} /> : user.role === 'employee' ? <EmployeeDashboard user={user} setUser={setUser} /> : <AdminDashboard user={user} setUser={setUser} />}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App