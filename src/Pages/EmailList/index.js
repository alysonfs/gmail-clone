import React from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material'
import {
  ArrowDropDown, ChevronLeft, ChevronRight, Inbox,
  KeyboardHide, LocalOffer, MoreVert, Person, Redo, Settings
} from '@mui/icons-material'
import Section from '../../Components/Section'
import EmailRow from '../../Components/EmailRow'

function EmailList () {
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
        <EmailRow
          title={'Twitch'}
          subject={'Hey fellow streamer!!'}
          description={'This is a test'}
          time={'10PM'} />
        <EmailRow
          title={'Twitch'}
          subject={'Hey fellow streamer!!'}
          description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature'}
          time={'10PM'} />
      </div>
    </div>
  )
}

export default EmailList