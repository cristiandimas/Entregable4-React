
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserDeleteConfirm from './components/styles/UserDeleteConfirm'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {


const {users, getAllUsers, createNewUser, deleteUserById, updateUserById } = useCrud()
const [updateUser, setUpdateUser] = useState()
const [closeForm, setCloseForm] = useState(true)
const [confirmDeleteUser, setConfirmDeleteUser] = useState(true)

useEffect(() => {
  getAllUsers()
}, [])



  return (
   <div className='App'>
    
    <div className='container__btn'><h1 className='App__title'>Users</h1><button className='App__btn' onClick={() => setCloseForm(false)}>+ Add User</button></div>
    <div className={`form__container ${closeForm &&'close__form'} `}>
    <FormUser
    createNewUser={createNewUser}
    updateUser={updateUser}
    updateUserById={updateUserById}
    setUpdateUser={setUpdateUser}
    setCloseForm={setCloseForm}
    />
    </div>
    <div className={`${confirmDeleteUser && 'close__confirm-delete'}`}>
    <UserDeleteConfirm
    setConfirmDeleteUser={setConfirmDeleteUser}
    />
    </div>
    <div className='card__container'>
    {
      users?.map(user => (
        <UserCard key={user.id}
        user={user}
        deleteUserById={deleteUserById}
        setUpdateUser={setUpdateUser}
        setConfirmDeleteUser={setConfirmDeleteUser}/>
      ))
    }
    </div>
   </div>
  )
}

export default App
