import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Rooms() {
    const room = useLocation().state

    return (
        <div className="movies-wrapper">
            <div className='item-wrapper'>
                <div className='item'>
                    <div className='img'>
                        {room.anh}
                    </div>
                    <div className='title'>
                        {room.sophong}
                    </div>
                    <div className='desc'>
                        {room.mota}
                    </div>
                    <div className='price'>
                        {room.gia} | <Link to={'/bill'} state={room}>Dat phong</Link>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Rooms;