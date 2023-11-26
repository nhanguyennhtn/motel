import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import ReactQuill from 'react-quill';

function Rooms() {
    const room = useLocation().state

    return (
        <div className="room-wrapper">
            <div className='item-wrapper'>
                <div className='item'>
                    <div className='img'>
                        <img src={room.anh} alt="" />
                    </div>
                    <div className='title'>
                        {room.sophong}
                    </div>
                    <div className='desc'>
                        <ReactQuill value={room.mota} readOnly={true} theme="bubble" />
                    </div>
                    <div className='price'>
                    {Intl.NumberFormat('vi-VN').format(room.gia)} vnđ<br />
                        <button><Link to={'/bill/create'} state={room}>Đặt Phòng</Link></button>

                    </div>

                </div>
            </div>

            <div id='valueText'></div>
        </div>
    );
}

export default Rooms;