import React, { useState } from 'react'
import Cookies from 'universal-cookie'

const initialUserCred = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const AuthForm = () => {
  const [userCred, setUserCred] = useState(initialUserCred);
  const [isSignup, setIsSignup] = useState(false);

  // Update user credentials every time the form input fields are changed
  const handleFormChange = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div>{ isSignup ? 'Sign Up' : 'Log In' }</div>
      <form onSubmit={ handleSubmit }>
        { isSignup && (
          <>
            <input
              name='firstName'
              type='text'
              placeholder='First Name'
              onChange={ handleFormChange }
              required
            />
            <input
              name='lastName'
              type='text'
              placeholder='Last Name'
              onChange={ handleFormChange }
              required
            />
            <input
              name='phoneNumber'
              type='text'
              placeholder='Phone Number'
              onChange={ handleFormChange }
              required
            />
          </>
        ) }
        <input
          name='username'
          type='text'
          placeholder='User Name'
          onChange={ handleFormChange }
          required
        />
        <input
          name='password'
          type='text'
          placeholder='Password'
          onChange={ handleFormChange }
          required
        />
        { isSignup && (
          <>
            <input
              name='confirmPassword'
              type='text'
              placeholder='Confirm Password'
              onChange={ handleFormChange }
              required
            />
          </>
        ) }
        <button>{ isSignup ? "Create Account" : "Log In" }</button>
      </form>
      <button>Forgot Password?</button>
      <div>
        <p>{ isSignup ? "Already have an account?" : "Don't have an account?" }</p>
        <span onClick={ () => { setIsSignup((prevIsSignUp) => !prevIsSignUp) } }>{ isSignup ? "Log In" : "Create New Account" }</span>
      </div>
    </>
  )
}

export default AuthForm