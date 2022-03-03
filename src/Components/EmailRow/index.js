import React from 'react'
import './EmailRow.css'
import { useDispatch } from 'react-redux'
import { selectMail } from '../../app/features/mailSlice'

import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function EmailRow ({id,  title, subject, description, time }) {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(selectMail({id,  title, subject, description, time }))
    navigate('/mail')
  }

  return (
    <div
      onClick={openMail}
      className="email-row">
      <div className="email-row__options">
        <Checkbox />
        <IconButton >
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="email-row__title">
        {title}
      </h3>
      <div className="email-row__messsage">
        <h4>{subject}{" "}
          <span className="email-row__description">-
            {description}
          </span>
        </h4>
      </div>
      <p className="email-row__time">
        {time}
      </p>
    </div>
  )
}

export default EmailRow