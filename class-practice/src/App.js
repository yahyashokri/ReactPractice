import React, { useState } from 'react'
import UserContext from './context/UserContext'
import Inputs from './components/Inputs'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])

  return (
    <UserContext.Provider value={{users , setUsers}}>
    <Inputs/>
    <UsersList/>
    </UserContext.Provider>
  )
}

export default App