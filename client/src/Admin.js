import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import AdminPage from './pages/admin'
import RoomRead from './pages/admin/room/Read'
import RoomCreate from './pages/admin/room/Create'
import RoomUpdate from './pages/admin/room/Update'
import Layout from './components/admin/Layout'

export default function Admin() {
    return (
        JSON.parse(localStorage.getItem('isLoggedIn')) === true
            ?
            <Layout>
                <Routes>
                    <Route path='/' element={<AdminPage />} />
                    <Route path='/room/' element={<RoomRead />} />
                    <Route path='/room/create' element={<RoomCreate />} />
                    <Route path='/room/update' element={<RoomUpdate />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
            : <Navigate to='/login' />
    )
}
