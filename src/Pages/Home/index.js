import React from 'react';
import './Home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from '../../features/mailSlice'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar'
import Mail from '../Mail';
import EmailList from '../EmailList';
import SendMail from '../SendMail';

function App () {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
