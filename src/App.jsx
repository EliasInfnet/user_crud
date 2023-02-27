import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useCrud from './hooks/useCrud'
import { ActionIcon, Button, Table } from '@mantine/core';
import { IconPlus, IconTrash, IconPencil } from '@tabler/icons-react';
import { v1 } from 'uuid';
import { faker } from '@faker-js/faker'

function App() {

  const { users, createUser, deleteUser, updateUser } = useCrud()

  return (
    <Table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>email</th>
          <th>
            <ActionIcon onClick={() => {
              createUser({
                uid: v1(),
                name: faker.name.firstName(),
                age: (100 * Math.random()).toFixed(0),
                email: faker.internet.email(),
              })
            }}>
              <IconPlus size={18} />
            </ActionIcon>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.uid}>
            {/* <td>{u.uid}</td> */}
            <td>{u.name}</td>
            <td>{u.age}</td>
            <td>{u.email}</td>
            <td>
              <ActionIcon color={'blue'} onClick={() => {
              updateUser({
                uid: u.uid,
                name: faker.name.firstName(),
                age: (100 * Math.random()).toFixed(0),
                email: faker.internet.email(),
              })
            }}>
                <IconPencil size={18} />
              </ActionIcon>
            </td>
            <td>
              <ActionIcon color={'red'} onClick={() => deleteUser(u.uid)}>
                <IconTrash size={18} />
              </ActionIcon>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default App
