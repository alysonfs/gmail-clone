import React from 'react'
import './SendMail.css'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../../app/features/mailSlice'
import { db, collection, addDoc, serverTimestamp} from '../../app/firebase'

import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

function SendMail () {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    addDoc(collection(db, 'emails'), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp()
    })
      .then(() => {
        dispatch(closeSendMessage())
      })
      .catch(error => console.error('Erros adding document', error))
  }

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>new Message</h3>
        <Close className='sendmail__icon_close'
          onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='To'
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