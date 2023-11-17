import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiRoomRead } from '../services'

function Rooms({ isHome }) {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiRoomRead()
        setRooms(res.rooms)
    }

    return (
        <div className="movies-wrapper">
            {rooms && rooms.map(item => {
                if (!item.isOrdered) {
                    return <div key={item._id} className="item-wrapper">
                        <div className="item">
                            <div className="img">
                                <img src={item.anh} alt="" />
                                <div className="coating">
                                    <div className="feature">
                                        <Link to={`/room/${item._id}`} state={item}>Xem thêm</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="title">{item.sophong}</div>
                            <div className='detail-footer'>
                                <span>Kích thước:{item.kichthuoc}</span>
                            </div>
                            <div className="desc">
                                <span>{item.gia} đồng</span>
                                | <button><Link to={'/bill/create'} state={item}>Đặt Phòng</Link></button>
                            </div>
                        </div>
                    </div>
                }
                return ''
            })}
        </div>
    );
}

export default Rooms;