import React, { useState } from 'react'

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div>
      <div>{isSignup ? 'Sign Up' : 'Sign In'}</div>
      <form>
        {isSignup && (
          <div>
            <label>First Name</label>
            <input
              name='firstName'
              required
            />
            <label>Last Name</label>
            <input
              name='lastName'
              required
            />
            <label>Phone Number</label>
            <input
              name='phoneNumber'
              required
            />
          </div>
        )}
        <label>User Name</label>
        <input
          name='userName'
          required
        />
        <label>Password</label>
        <input
          name='passWord'
          required
        />
      </form>
      {
        isSignup ? (
          <div>
            <p>Don't have an account?</p>
            <span onClick={() => {setIsSignup(false)}}>Create New Account</span>
          </div>
        ) : (
          <div>
            {/* <button onClick={setIsSignup(false)}>HI 2</button> */}
            <span onClick={() => {setIsSignup(true)}}>Sign In</span>
          </div>
        )
      }
    </div>
  )
}

export default AuthForm