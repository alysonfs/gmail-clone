import React from 'react'
import './Login.css'
import { auth, provider, signInWithPopup } from '../../app/firebase'
import { login } from '../../app/features/userSlice'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

function Login () {
  const dispatch = useDispatch()

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png"
          alt="google logo" />
        <Button onClick={signIn} variant='contained' color='primary'>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login