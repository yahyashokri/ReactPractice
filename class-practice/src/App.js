import React, { useState } from 'react'
import UserContext from './context/UserContext'
import Inputs from './components/Inputs'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])

  return (
    <UserContext.Provider value={{users , setUsers}}>
      <section className='grid grid-cols-2 '>
        <div className='col-start-2 col-end-3 border-l-2 border-gray-400'>
        <div className='flex items-center flex-col w-full '>
    <Inputs />
        </div>
        </div>
        <div className='col-start-1 col-end-2 row-start-1 '>
        <div className='flex justify-center align-center flex-col w-full text-center'>
    <UsersList/>
    </div>

        </div>
      </section>
    </UserContext.Provider>
  )
}

export default App