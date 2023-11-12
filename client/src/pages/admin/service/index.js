import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { apiRoomRead, apiRoomUpdate } from '../../../services'

function Rooms() {
    const [rooms, setRooms] = useState([])
    const room = useLocation().state
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiRoomRead()
        setRooms(res.rooms)
    }

    async function handleSubmit() {
        try {
            const res = await apiRoomUpdate({ ...room, isOrdered : false})
            alert('huy thanh cong')
            console.log(res);
        } catch (e) {
        }
    }

    return (
        <div className="movies-wrapper">
            {rooms && rooms.map(item => {
                if (item.isOrdered !== false) {
                    return <div key={item._id} className="item-wrapper">
                        <div className="item">
                            <div className="img">
                                <img src={item.anh} alt="" />
                                <div className="coating">
                                    <div className="feature">
                                        <Link to={`/room/${item._id}`} state={item}>Phòng đã đặt</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="title">{item.sophong}</div>
                            <div className='detail-footer'>
                                <span>Kích thước:{item.kichthuoc}</span>
                            </div>
                            <div className="desc">
                                <span>{item.gia} đồng</span>
                                | <button onClick={handleSubmit}>Hủy Đặt Phòng</button>
                            </div>
                        </div>
                    </div>
                }
            })}
        </div>
    );
}

export default Rooms;