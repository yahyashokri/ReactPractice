import React, { useContext, useRef, useState } from 'react'
import UserContext from '../context/UserContext'

const Inputs = () => {
    const nameInput = useRef('')
    const surNameInput = useRef('')
    const emailInput = useRef('')
    const numberInput = useRef('')
    const users = useContext(UserContext)
    const addUser = ()=>{
        users.setUsers(oldData => [...oldData , {
            name: nameInput.current.value,
            surName:surNameInput.current.value,
            email:emailInput.current.value,
            number:numberInput.current.value
        }])
        console.log(users.users);
        
    }
  return (
    <>
    <input className='border-black m-10 block text-center border-2 rounded-full' ref={nameInput} type="text" placeholder='Name' />
    <input className='border-black m-10 block text-center border-2 rounded-full' ref={surNameInput} type="text" placeholder='Surname' />
    <input className='border-black m-10 block text-center border-2 rounded-full' ref={emailInput} type="text" placeholder='Email' />
    <input className='border-black m-10 block text-center border-2 rounded-full' ref={numberInput} type="text" placeholder='Number' />
    <button className='bg-slate-700 w-32 mb-10 h-8 rounded-md' onClick={addUser}>Add user</button>
    </>

  )
}

export default Inputs