import React, { useState } from 'react'
import { apiUserUpdate } from '../../services'

export default function Update() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo);
    const [sodu, setSodu] = useState(0);

    const handleUpdate = async () => {
        if (!userInfo) {
            window.confirm('Vui lòng đăng nhập tài khoản')
            window.location.href = '/'
        } else {
            const res = await apiUserUpdate({ ...userInfo, sodu: sodu + userInfo.sodu })
            if (res && res.status === true) {
                localStorage.setItem('isLoggedIn', res.status)
                localStorage.setItem('userInfo', JSON.stringify(res.userInfo))
                alert('Nạp tiền thành công')
                window.location.href = '/'
            }
        }
    }

    return (
        <div className='readed'>
            <h2>Nạp Tiền</h2>
            <div className='contain-item'>
                <input
                    type="number"
                    value={sodu}
                    onChange={(e) => setSodu(parseInt(e.target.value, 10))}
                />
                <button onClick={handleUpdate} >Nạp </button>
            </div>
        </div>
    )
}