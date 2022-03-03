import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material'
import {
  ArrowDropDown, ChevronLeft, ChevronRight, Inbox,
  KeyboardHide, LocalOffer, MoreVert, Person, Redo, Settings
} from '@mui/icons-material'
import Section from '../../Components/Section'
import EmailRow from '../../Components/EmailRow'
import { db, collection, query, orderBy, getDocs } from '../../app/firebase'

function EmailList () {
  const [emails, setEmails] = useState([])
  const emailRef = collection(db, 'emails')
  const q = query(emailRef, orderBy('timestamp', 'desc'))

  useEffect(() => {
    getDocs(q)
      .then(({ docs }) => {
        setEmails(docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, [])

  return (
    <div className="email-list">
      <div className="email-list__settings">
        <div className="email-list__settings-left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email-list__settings-right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="email-list__sections">
        <Section Icon={Inbox} title={'Primary'} color={'red'} selected={true} />
        <Section Icon={Person} title={'Social'} color={'#1a73e8'} />
        <Section Icon={LocalOffer} title={'Promotions'} color={'green'} />
      </div>
      <div className="email-list__list">
        {emails &&
          emails.map(({ id, data: { to, subject, message, timestamp } }) =>
            <EmailRow
              key={id}
              id={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()} />
          )
        }
      </div>
    </div>
  )
}

export default EmailList