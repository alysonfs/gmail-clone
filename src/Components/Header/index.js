import React from 'react'
import './Header.css'
import { Apps, ArrowDropDown, MenuOutlined, Notifications, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '../../app/features/userSlice'
import { auth } from '../../app/firebase'


function Header () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutApp = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout())
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuOutlined />
        </IconButton>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='gmail logo' />
      </div>
      <div className="header__middle">
        <SearchOutlined />
        <input type="text" placeholder='Search mail' />
        <ArrowDropDown className='header__input-caret' />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user ? user.photoUrl : user.displayName[0]}
          onClick={logoutApp} />
      </div>
    </div>
  )
}

export default Header