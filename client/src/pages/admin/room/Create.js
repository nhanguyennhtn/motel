import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import ReactQuill from 'react-quill';
import { apiRoomCreate } from '../../../services'


export default function Create() {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()
    const [anh, setImage] = useState()
    const [value, setValue] = useState()

    const onSubmit = async (data, e) => {
        if (!anh) {
            setMessage('No image')
        } else {
            data.anh = anh
            data.mota = value
            try {
                const res = await apiRoomCreate(data)
                if (res.room) {
                    setMessage('Success')
                }
                e.target.reset()
                setImage()
            } catch (e) {
                setMessage('Failure')
            }
        }
    }

    return (
        <div className='create'>
            <Link to='/admin/room'>Read</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Create</h2>
                <input required autoComplete="off" {...register('sophong', { required: true })} placeholder='sophong' />
                <input required autoComplete="off" {...register('kichthuoc', { required: true })} placeholder='kichthuoc' />

                <ReactQuill theme="snow" value={value} onChange={setValue} />
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
}