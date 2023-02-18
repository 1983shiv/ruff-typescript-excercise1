import React, {useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
    
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <>
    LoggedIn Component 
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    {isLoggedIn ? <h2>User is logged In</h2> : <h2>User is Logged Out</h2>}
    </>
  )
}

export default LoggedIn