import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { logoHeader } from '../assets/img/logo.js'

export default function Header() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo);
    const user = useLocation().state
    console.log(user);

    const logout = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('userInfo')
        window.location.href = '/'
    }

    return (
        <div className='header'>
            <div className='header-top'>
                <div className='top-container'>
                    <div className='item-left'>
                        <div className='left-item'>
                            <Link target="_blank" to='https://www.facebook.com/profile.php?id=100017472396209'>
                                <i className="fa-brands fa-square-facebook"></i>
                                Facebook
                            </Link>
                        </div>
                        <div className='left-item'>

                            <Link target="_blank" to='https://github.com/nhanguyennhtn'>
                                <i className="fa-brands fa-square-github"></i>
                                GitHub
                            </Link>
                        </div>
                    </div>
                    <div className='item-right'>
                        {!isLoggedIn ?
                            <>
                                <div className='right-item'>
                                    <Link to='login'>
                                        Đăng nhập
                                    </Link>
                                </div>
                                <div className='right-item'>
                                    <Link to='register'>
                                        Đăng ký
                                    </Link>
                                </div>
                            </> :
                            <>
                                <div className='right-item'>
                                    {Intl.NumberFormat('vi-VN').format(userInfo.sodu)} vnđ
                                </div>
                                <div className='right-item'>
                                    <div className='menu'>
                                        {userInfo && userInfo.username}
                                        <div className='user-action'>
                                            <div className='item'>
                                                <Link to='/profile/' state={user}>Tài khoản</Link>
                                            </div>
                                            <div className='item'>
                                                <Link to='/account-balance/' state={user}>Nạp tiền</Link>
                                            </div>
                                            {userInfo && userInfo.role === 1 &&
                                                <Link to='/admin/' className='item'>Quản lý</Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='right-item'>
                                    <div className='log-out' onClick={logout}>
                                        Đăng xuất
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='header-logo'>
                <Link to='/'>
                    <img src={logoHeader} alt='' />
                </Link>
            </div>
            <div className='header-main'>
                <div className='item'>
                    <NavLink to='/'>
                        Trang chủ
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to='/room'>
                        Phòng Trọ
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink to='/contact/create'>
                        Liên Hệ
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
