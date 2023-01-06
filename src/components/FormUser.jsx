import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import './styles/userForm.css'

const FormUser = ({createNewUser, updateUser, updateUserById, setUpdateUser,setCloseForm}) => {

   const {register, handleSubmit, reset} = useForm()

   useEffect(() => {
    reset(updateUser)
   }, [updateUser])
   
  
   const submit = (data) => {
   if(updateUser){
    updateUserById(updateUser.id, data)
    setUpdateUser()
   }else{
    createNewUser(data);
   }
   setCloseForm(true)
    reset({
      email:"",
      password:"",
      first_name:"",
      last_name:"",
      birthday:""
    })
   }

   const clearForm = () =>{
    setCloseForm(true)
    setUpdateUser()
    reset({
      email:"",
      password:"",
      first_name:"",
      last_name:"",
      birthday:""
    })
   }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <div className='form_x'onClick={handleSubmit(clearForm)}>x</div>
        <h2 className='form__title'>{updateUser?'Update User': 'Create User'}</h2>
        <div className='form__div'>
          <label className='form__label' htmlFor="first_name">First Name </label>
          <input className='form__input' type="text" id='first_name' {...register("first_name")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="last_name">Last Name </label>
          <input className='form__input' type="text" id='last_name' {...register("last_name")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="email">Email </label>
          <input className='form__input' type="email" id='email' {...register("email")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="password">Password </label>
          <input className='form__input' type="password" id='password' {...register("password")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="birthday">Birthday </label>
          <input className='form__input' type="date" id='birthday' {...register("birthday")}/>
        </div>

      <button className='form__button'>{updateUser? "Update User" : "New User"}</button>
      </form>
    </div>
  )
}

export default FormUser