import React, {useState, useContext} from 'react'
import { UserContext } from './UserContext'


const User = () => {
    const userContext = useContext(UserContext)
    // Initial value type is different than future value type
    // const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'Shiv',
                email: 'shiv@gmail.com'
            })
        }
    }
    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>

            {
                userContext?.user &&
                <>
                    <div>User name is : {userContext?.user?.name}</div>
                    <div>User email is : {userContext?.user?.email}</div>
                </>
            }
            <br />
        
        </div>
    )
}

export default User