import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Rooms() {
    const room = useLocation().state
    // const listSlideImage = room.anh
    // const [position, setPosition] = useState(3)

    // const prevSlideImage = () => {
    //     position > 0 ? setPosition(position - 1)
    //         : setPosition(listSlideImage.length - 1)
    // }

    // const nextSlideImage = () => {
    //     position < listSlideImage.length - 1 ? setPosition(position + 1)
    //         : setPosition(0)
    // }

    // useEffect(() => {

    //     const interval = setInterval(updateSlideImage, 4000)
    //     return () => {
    //         clearInterval(interval);
    //     }
    // })

    // function updateSlideImage() {
    //     position < listSlideImage.length - 1 ? setPosition(position + 1)
    //         : setPosition(0)
    // }

    return (
        <div className="room-wrapper">
            {/* <div className='room-container'>
                <i onClick={() => prevSlideImage()} className="fa-solid fa-chevron-left"></i>
                <img src={listSlideImage[position]} alt='' />
                <i onClick={() => nextSlideImage()} className="fa-solid fa-chevron-right"></i>
            </div> */}
            <div className='item-wrapper'>
                <div className='item'>
                    <div className='img'>
                    <img src={room.anh} alt="" />
                    </div>
                    <div className='title'>
                        {room.sophong}
                    </div>
                    <div className='desc'>
                        {room.mota}
                    </div>
                    <div className='price'>
                        {room.gia} đồng <br/>
                         <button><Link to={'/bill'} state={room}>Đặt Phòng</Link></button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Rooms;