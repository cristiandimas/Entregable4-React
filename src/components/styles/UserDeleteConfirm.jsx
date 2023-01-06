import React from 'react'

const UserDeleteConfirm = ({setConfirmDeleteUser}) => {
  return (
   <article  className='confirm__delete'>
    <div>
    <h2 className='delete__title'>Delete User</h2>

    <p className='delete_message'>El usuario se ha eliminado</p>
    <button className='confirm__delete-btn' onClick={()=> setConfirmDeleteUser(true)}>Aceptar</button></div>
   </article>
  )
}

export default UserDeleteConfirm