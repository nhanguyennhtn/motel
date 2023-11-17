import React from 'react'
import { useLocation } from 'react-router-dom';
import { apiRoomUpdate, apiBillCreate } from '../../services'

function Rooms() {
    const room = useLocation().state
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var ngay = today.toLocaleDateString("vi-VN", options)

    async function test() {
        try {
            if (room && room.sophong) {
                await apiRoomUpdate({ ...room, isOrdered: true })
                const data = { fullname: userInfo.fullname, username: userInfo.username, email: userInfo.email, sophong: room.sophong && room.sophong, gia: room.gia, ngay: today.toLocaleDateString("vi-VN", options) }
                await apiBillCreate(data)
                alert('Thanh toán thành công')
                window.location.href = '/'
            }
        } catch (e) {
        }
    }

    return (
        <div className="bill-wrapper">
            <div className='item-waper'>
                <div className='form'>
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
                        Số Phòng: {room.sophong ? room.sophong : ""}
                    </div>
                    <div className='conent-bill'>
                        Giá Phòng: {room.gia} đồng
                    </div>
                    <div className='conent-bill'>
                        Ngày lập: {ngay}
                    </div>
                    <div className='item-wrapper'>
                        <button onClick={() => test()}>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;