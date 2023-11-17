import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FileBase64 from 'react-file-base64'
import ReactQuill from 'react-quill';
import { apiRoomUpdate } from '../../../services'

export default function Update() {
    const location = useLocation()
    const room = location.state
    console.log(room.mota);
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState()
    const [anh, setImage] = useState(room.anh)
    const [value, setValue] = useState(room.mota)
    const navigate = useNavigate()

    const onSubmit = async (data, e) => {
        if (!anh) {
            setMessage('No image')
        } else {
            data.anh = anh
            data._id = room._id
            data.mota = value
            try {
                const res = await apiRoomUpdate(data)
                if (res.room) {
                    navigate('/admin/room')
                }
                e.target.reset()
            } catch (e) {
                setMessage('Failure')
            }
        }
    }

    return (
        <div className='create'>
            <Link to='/admin/room'>Read</Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Update</h2>
                <input required autoComplete="off" defaultValue={room.sophong} {...register('sophong', { required: true })} placeholder='sophong' />
                <input required autoComplete="off" defaultValue={room.kichthuoc} {...register('kichthuoc', { required: true })} placeholder='kichthuoc' />
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                {/* <textarea required autoComplete="off" defaultValue={room.mota}{...register('mota', { required: true })} placeholder='mota' ></textarea> */}
                <input required autoComplete="off" defaultValue={room.gia} {...register('gia', { required: true })} placeholder='gia' />
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
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}