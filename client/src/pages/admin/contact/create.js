import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import { apiRoomCreate } from '../../../services'

export default function Create() {
    const { contact, handleSubmit } = useForm()
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const onSubmit = async (data, e) => {
        try {
            const res = await apiRoomCreate(data)
            if (res.room) {
                setMessage('Success')
            }
            e.target.reset()
        } catch (e) {
            setMessage('Failure')
        }
    }
}

return (
    <div className='create'>
        <Link to='/admin/contacts'>Read</Link>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create</h2>
            <input required autoComplete="off" {...contact('sophong', { required: true })} placeholder='sophong' />
            <input required autoComplete="off" {...register('kichthuoc', { required: true })} placeholder='kichthuoc' />
            <textarea required autoComplete="off" {...contact('mota', { required: true })} placeholder='mota' ></textarea>
            <input required autoComplete="off" {...register('gia', { required: true })} placeholder='gia' />
            <label>
                <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => {
                        setImage(base64)
                    }}
                />
                Ảnh
            </label>
            {anh && <img src={anh} alt='' />}
            <p>{message && message} </p>
            <button type='submit'>Create</button>
        </form>
    </div>
)