import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import HomePage from './pages'
import Rooms from './pages/Rooms'
import BillCreate from './pages/bills/BillCreate'
import ContactCreate from './pages/contracts/contactCreate'
import Profile from './pages/Profile'
import AccountBalance from './pages/account-balance'
import RoomDetail from './pages/RoomDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/room' element={<Rooms />} />
        <Route path='/room/:id' element={<RoomDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account-balance' element={<AccountBalance />} />
        <Route path='/bill/create' element={<BillCreate />} />
        <Route path='/contact/create' element={<ContactCreate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App
