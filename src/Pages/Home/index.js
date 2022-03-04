import React, { useEffect } from 'react';
import './Home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectSendMessageIsOpen } from '../../app/features/mailSlice'
import { selectUser, login, logout } from '../../app/features/userSlice'
import { auth } from '../../app/firebase'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar'
import Mail from '../Mail';
import EmailList from '../EmailList';
import SendMail from '../SendMail';
import Login from '../Login'

function App () {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { email, uid, displayName, photoURL } = userAuth
        dispatch(login({ email, uid, displayName, photoUrl: photoURL }))
      } else {
        auth.signOut()
          .then(() => dispatch(logout()))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
