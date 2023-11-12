import React from 'react'
// import { useLocation} from 'react-router-dom'

export default function RegisterPage() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // const room = useLocation().state
    console.log(userInfo);

    return (
        <div className="user-wrapper">
            <div className="form-container">
                <div className='item'>
                    <div className='title'>
                    Thông tin accout
                    </div>
                    <div className='user-address'>
                    {userInfo._id}
                    </div>
                    <div className='user-name'>
                    Họ và Tên: {userInfo.fullname}
                    </div>
                    <div className='user-name'>
                    Tên tài Khoản: {userInfo.username}
                    </div>
                    <div className='user-pass'>
                    {/* {room.sopnhong} */}
                    </div>
                    <div className='user-email'>
                    Email: {userInfo.email}
                    </div>  
                </div>
            </div>
        </div >
    )
}
