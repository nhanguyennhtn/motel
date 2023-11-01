import React from 'react'
import { useLocation} from 'react-router-dom'

export default function RegisterPage() {
    const user = useLocation().state

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div>
                    <h1>Danh sách người dùng</h1>
                    <ul>
                        <li key={user._id}>
                            <p>Tên: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
