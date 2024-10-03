import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const UsersList = () => {
    const users = useContext(UserContext)

  return (
    users.users.map((user)=>{
        return (
            <div>
                <h2>Full name: {user.name} {user.surName}</h2>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.number}</p>
            </div>
        )
    }
    )
  )
}

export default UsersList