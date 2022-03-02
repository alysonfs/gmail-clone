import React from 'react'
import './Header.css'

import { Apps, ArrowDropDown, MenuOutlined, Notifications, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'

function Header () {
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
        <Avatar />
      </div>
    </div>
  )
}

export default Header