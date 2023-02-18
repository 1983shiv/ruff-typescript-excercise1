import React, {useState} from 'react'

type AuthUser = {
    name: string,
    email : string
}


export const User = () => {

    // Initial value type is different than future value type
    const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Shiv',
            email: 'shiv@gmail.com'
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>

            {
                user &&
                <>
                    <div>User name is : {user.name}</div>
                    <div>User email is : {user.email}</div>
                </>
            }
            <br />
            {/* OR */}
            {/* If user is not null, it will display user.name or user.email */}
            <div>User name is : {user?.name}</div>
            <div>User email is : {user?.email}</div>
        
        </div>
    )
}

export default User