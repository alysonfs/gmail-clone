import React from 'react'
import './Sidebar.css'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'
import SidebarOption from '../SidebarOption'
import {
  AccessTime, Add, Duo, ExpandMore, Inbox,
  LabelImportant, NearMe, Note, Person, Phone, Star
} from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'

function Sidebar () {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize='large' />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}>
          Compose
      </Button>
      <SidebarOption Icon={Inbox} title={'Inbox'} number={45} selected={true} />
      <SidebarOption Icon={Star} title={'Starred'} number={45} />
      <SidebarOption Icon={AccessTime} title={'Snoozend'} number={45} />
      <SidebarOption Icon={LabelImportant} title={'Important'} number={45} />
      <SidebarOption Icon={NearMe} title={'Sent'} number={45} />
      <SidebarOption Icon={Note} title={'Drafts'} number={45} />
      <SidebarOption Icon={ExpandMore} title={'More'} number={45} />
      <div className="sidebar__footer">
        <div className="sidebar__footer-icons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar