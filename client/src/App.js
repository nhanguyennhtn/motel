import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import HomePage from './pages'
import Rooms from './pages/Rooms'
import Bill from './pages/Bill'
import Profile from './pages/Profile'
import RoomDetail from './pages/RoomDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/room' element={<Rooms />} />
        <Route path='/room/:id' element={<RoomDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bill' element={<Bill />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App
