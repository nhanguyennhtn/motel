import React, { useState, useEffect } from 'react'
import { apiBilltRead } from '../services'

export default function ProfilePage() {
    const [bills, setBill] = useState([])
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiBilltRead()
        setBill(res.bills)
    }

    return (
        <div className="user-wrapper">
            {bills && bills.map(item => {
                if (item.name === userInfo.username) {
                    <div className='user-pass'>
                        {item.sopnhong}
                    </div>
                } return ''
            })}
            <div className="form-container">
                <div className='item'>
                    <div className='title'>
                        Thông tin accout
                    </div>
                    <div className='user-address'>
                        Địa chỉ IP: {userInfo._id}
                    </div>
                    <div className='item-wapper'>
                        <div className='user-name'>
                            Họ và Tên: {userInfo.fullname}
                        </div>
                        <div className='user-account'>
                            Tên tài Khoản: {userInfo.username}
                        </div>
                        <div className='user-email'>
                            Email: {userInfo.email}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
