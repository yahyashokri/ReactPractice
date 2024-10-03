import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const UsersList = () => {
    const users = useContext(UserContext)
    const removeUser =(user)=>{
      users.setUsers(
          users.users.filter((item)=>user !== item)
      ) 
    }
  return (
    users.users.map((user)=>{
        return (
            <>
                <h2>Full name: {user.name} {user.surName}</h2>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.number}</p>
                <button onClick={()=>removeUser(user)} className='rounded-md w-40 ml-[258px] h-8 bg-red-700 '>Remove user</button>
            </>
        )
    }
    )
  )
}

export default UsersList