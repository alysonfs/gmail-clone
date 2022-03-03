import React from 'react'
import './Mail.css'
import { useSelector } from 'react-redux'
import { selectOpenMail } from '../../app/features/mailSlice'

import {
  ArrowBack, CheckCircle, Delete,
  Email, Error, ExitToApp, LabelImportant, MoreVert,
  MoveToInbox, Print, UnfoldMore, WatchLater
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Mail () {
  let navigate = useNavigate()
  let selectedMail = useSelector(selectOpenMail)

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools-left">
          <IconButton
            onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton><MoveToInbox /></IconButton>
          <IconButton><Error /></IconButton>
          <IconButton><Delete /></IconButton>
          <IconButton><Email /></IconButton>
          <IconButton><WatchLater /></IconButton>
          <IconButton><CheckCircle /></IconButton>
          <IconButton><LabelImportant /></IconButton>
          <IconButton><MoreVert /></IconButton>
        </div>
        <div className="mail__tools-right">
          <IconButton><UnfoldMore /></IconButton>
          <IconButton><Print /></IconButton>
          <IconButton><ExitToApp /></IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body-header">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail__body-icon-important' />
          <p>{selectedMail?.title}</p>
          <p className='mail__body-time'>
            {selectedMail?.time}
          </p>
        </div>
        <div className="mail__body-message">
          <p>
            {selectedMail?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mail