import React, { useContext, useRef, useState } from 'react'
import UserContext from '../context/UserContext'

const Inputs = () => {
    const [content, setContent] = useState('')
    const nameInput = useRef('')
    const surNameInput = useRef('')
    const emailInput = useRef('')
    const numberInput = useRef('')
    const users = useContext(UserContext)
    const addUser = ()=>{
        !users.users.includes({
            name: nameInput.current.value,
            surName:surNameInput.current.value,
            email:emailInput.current.value,
            number:numberInput.current.value
        })?users.setUsers(oldData => [...oldData , {
            name: nameInput.current.value,
            surName:surNameInput.current.value,
            email:emailInput.current.value,
            number:numberInput.current.value
        }]):alert("User  already exists")
        console.log(users.users);
        
    }
  return (
    <div>
    <input ref={nameInput} type="text" placeholder='Name' />
    <input ref={surNameInput} type="text" placeholder='Surname' />
    <input ref={emailInput} type="text" placeholder='Email' />
    <input ref={numberInput} type="text" placeholder='Number' />
    <button onClick={addUser}>Add user</button>
    </div>

  )
}

export default Inputs