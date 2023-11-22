import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { apiUserRegister } from '../services'

export default function RegisterPage() {
    const { register, handleSubmit } = useForm()
    const [errMessage, setMessage] = useState()


    const onSubmit = async data => {
        try {
            const res = await apiUserRegister(data)
            if (res && res.status === true) {
                setMessage(res.success)
                window.location.href = '/login'
            }
            alert('Đăng ký tài khoản thành công ')
        } catch (e) {
            setMessage(e.errMessage)
        }
    }

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        Đăng ký
                    </div>
                    <input required placeholder="Fullname" autoComplete="off" {...register('fullname', { required: true })} />
                    <input required placeholder="Username" autoComplete="off" {...register('username', { required: true })} />
                    <input required type='password' placeholder="Password" autoComplete="off" {...register('password', { required: true })} />
                    <input required placeholder="Email" autoComplete="off" {...register('email', { required: true })} />
                    <input required placeholder="Role" autoComplete="off" {...register('role', { required: true })} />
                    <button>
                        Đăng ký
                    </button>
                    <span className='success'>
                        {errMessage}
                    </span>
                    <p>
                        Đã có tài khoản?
                        <Link to='/login'> Đăng nhập</Link>
                        <Link to='/'>
                            <i class="fa-solid fa-house"></i>
                        </Link>
                    </p>
                </form>
            </div>
        </div >
    )
}
