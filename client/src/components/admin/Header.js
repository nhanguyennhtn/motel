import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const logout = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('userInfo')
        window.location.href = '/'
    }

    return (
        <div id="header">
            <a className="logo" href="/">Motel ABC</a>
            <nav>
                <NavLink to='/admin/'>Trang chủ</NavLink>
                <NavLink to='/admin/room'>Phòng trọ</NavLink>
                <NavLink to='/admin/services'>Dịch vụ</NavLink>
                <NavLink to='/admin/contacts'>Phản hồi</NavLink>
            </nav>
            <button className="user" onClick={logout}>
                {userInfo.username}
                &nbsp;
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
        </div>
    )
}
