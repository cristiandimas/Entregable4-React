import React from 'react'
import './styles/userCard.css'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";



const UserCard = ({user, deleteUserById, setUpdateUser,setConfirmDeleteUser}) => {

  const deleteUser = () => {
    deleteUserById(user.id)
    setConfirmDeleteUser(false)  
  }

  const  updateUser = () =>{
    setUpdateUser(user)
    console.log(user)
  }

  return (
    <article className='card'>
      <main>
      <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
      <ul className='card__list'>
        <li className='card__list-item'>
          <span className='card__list-span'>Email: </span>{user.email}</li>
        <li className='card__list-item'>
          <span className='card__list-span'>Birthday: </span>{user.birthday}</li>
      </ul>
      </main>
      <footer className='card__footer'>
        <button className='card__btn card__btn-trash' onClick={deleteUser}><FaTrashAlt/></button>
        <button className='card__btn card__btn-update' onClick={updateUser}><FaRegEdit/></button>
      </footer>
    </article>
  )
}

export default UserCard