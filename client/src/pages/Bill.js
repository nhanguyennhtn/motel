import React from 'react'
import { useLocation } from 'react-router-dom'
import { apiRoomUpdate, apiBillCreate } from '../services'

function Rooms() {
    const room = useLocation().state
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var ngay = today.toLocaleDateString("vi-VN", options)

    async function handleSubmit() {
        try {
            const res = await apiRoomUpdate({ ...room, isOrdered: true })
            console.log(res);
            const data = { fullname: userInfo.fullname, username: userInfo.username, email: userInfo.email, sophong: room.sophong, gia: room.gia, ngay: today.toLocaleDateString("vi-VN", options) }
            console.log(data);
            await apiBillCreate(data)

        } catch (e) {
        }
    }

    return (
        <div className="bill-wrapper">
            <div className='item-waper'>
                <form>
                    <div className='title-bill'>
                        Thanh Toán đặc phòng
                    </div>
                    <div className='conent-bill'>
                        {userInfo.username}
                    </div>
                    <div className='conent-bill'>
                        email: {userInfo.email}
                    </div>
                    <div className='conent-bill'>
                        Số Phòng: {room.sophong}
                    </div>
                    <div className='conent-bill'>
                        Giá Phòng: {room.gia} đồng
                    </div>
                    <div className='conent-bill'>
                        Ngày lập: {ngay}
                    </div>
                    <div className='item-wrapper'>
                        <button onClick={handleSubmit}>Thanh Toán</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Rooms;