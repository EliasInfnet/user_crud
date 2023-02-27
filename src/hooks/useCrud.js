import React, { useState } from 'react'
import { v1 } from 'uuid'

function useCrud() {

  const [users, setUsers] = useState([])

  const deleteUser = (uid) => {
    const newUsers = users.filter(u => u.uid !== uid)
    setUsers(() => [...newUsers])
  }

  const updateUser = (user) => {
    const newUsers = users.map(u => u.uid === user.uid ? user : u)
    setUsers(() => [...newUsers])
  }

  const createUser = (user) => {
    setUsers(prev => [...prev, user])
  }

  return { users, deleteUser, updateUser, createUser }
}

export default useCrud