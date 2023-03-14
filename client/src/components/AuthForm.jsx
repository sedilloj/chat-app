import React, { useState } from 'react'

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
    setUserCred({...userCred, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div>{isSignup ? 'Sign Up' : 'Log In'}</div>
      <form onSubmit={() => {}}>
        {isSignup && (
        <>
          <label>First Name</label>
          <input
            name='firstName'
            onChange={handleFormChange}
            required
          />
          <label>Last Name</label>
          <input
            name='lastName'
            onChange={handleFormChange}
            required
          />
          <label>Phone Number</label>
          <input
            name='phoneNumber'
            onChange={handleFormChange}
            required
          />
        </>
        )}
        <label>User Name</label>
        <input
          name='username'
          onChange={handleFormChange}
          required
        />
        <label>Password</label>
        <input
          name='password'
          onChange={handleFormChange}
          required
        />
        {isSignup && (
          <>
            <label>Confirm Password</label>
            <input
              name='confirmPassword'
              onChange={handleFormChange}
              required
            />
          </>
        )}
      </form>
      <button>{isSignup ? "Create Account" : "Log In"}</button>
      <button>Forgot Password?</button>
      <div>
        <p>{isSignup ? "Already have an account?" : "Don't have an account?"}</p>
        <span onClick={() => {setIsSignup(!isSignup)}}>{isSignup ? "Log In" : "Create New Account"}</span>
      </div>
    </>
  )
}

export default AuthForm