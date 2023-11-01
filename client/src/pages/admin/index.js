import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiRoomRead, apiRoomDelete } from '../../services'

export default function Home() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resRoom = await apiRoomRead()
        setRooms(resRoom.rooms)
    }

    const deleteRoom = async id => {
        if (window.confirm("Would you like to remove?")) {
            await apiRoomDelete(id)
            fetchData()
        }
    }
    
    return (
        <div className='read'>
            <h1>Phòng</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>số Phòng</th>
                        <th>ảnh</th>
                        <th>kích thước</th>
                        <th>mô tả</th>
                        <th>giá</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.length > 0 ? rooms.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.sophong}</td>
                            <td>
                                <img src={item.anh} alt='' />
                            </td>
                            <td>{item.kichthuoc}</td>
                            <td>{item.mota}</td>
                            <td>{item.gia}</td>
                            <td>
                                <Link to='/admin/room/update' state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteRoom(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='8'>Không có dữ liệu</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}