import React from 'react'
import './SendMail.css'

import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

function SendMail () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    console.log(formData, errors)
  }

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>new Message</h3>
        <Close className='sendmail__icon_close' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='To'
          {...register('to', { required: true })} />
        {errors.to &&
          <p className='sendmail__error-message'>To is required</p>}

        <input type="text" placeholder='Subject'
          {...register('subject', { required: true })} />
        {errors.subject &&
          <p className='sendmail__error-message'>Subject is required</p>}

        <input type="text" placeholder='Message...'
          className='sendmail__input-message'
          {...register('message', { required: true })} />
        {errors.message &&
          <p className='sendmail__error-message'>Subject is required</p>}

        <div className="sendmail__options">
          <Button className='sendmail__send-button' variant='contained' color='primary' type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail