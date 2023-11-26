import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apiRoomRead, apiRoomUpdate } from '../../../services'

function Rooms() {
    const [rooms, setRooms] = useState([])
    // const room = useLocation().state

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiRoomRead()
        setRooms(res.rooms)
    }

    const handleSubmit = async (item) => {
        await apiRoomUpdate({ ...item, isOrdered: false })
        alert('Đã hủy đặt phòng thành công')
        fetchData()

    }

    return (
        <div className="movies-wrapper">
            {rooms && rooms.map(item => {
                if (item.isOrdered) {
                    return <div key={item._id} className="item-wrapper">
                        <div className="item">
                            <div className="img">
                                <img src={item.anh} alt="" />
                                <div className="coating">
                                    <div className="feature">
                                        <Link>Phòng đã đặt</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="title">{item.sophong}</div>
                            <div className='detail-footer'>
                                <span>Kích thước:{item.kichthuoc}</span>
                            </div>
                            <div className="desc" >
                                <span>{Intl.NumberFormat('vi-VN').format(item.gia)} vnđ</span>
                                | <button onClick={()=> handleSubmit(item)} >Hủy Đặt Phòng</button>
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