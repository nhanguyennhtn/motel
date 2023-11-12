import React, { useEffect, useState } from 'react'
import Rooms from './Rooms'
import { listSlideImage } from '../assets/img'

export default function Home() {
    const [position, setPosition] = useState(3)

    const prevSlideImage = () => {
        position > 0 ? setPosition(position - 1)
            : setPosition(listSlideImage.length - 1)
    }

    const nextSlideImage = () => {
        position < listSlideImage.length - 1 ? setPosition(position + 1)
            : setPosition(0)
    }

    useEffect(() => {

        const interval = setInterval(updateSlideImage, 4000)
        return () => {
            clearInterval(interval);
        }
    })

    function updateSlideImage() {
        position < listSlideImage.length - 1 ? setPosition(position + 1)
            : setPosition(0)
    }

    return (
        <div className='home-wrapper'>
            <div className='separate'></div>
            <div className='home-title'>
                <span>
                    Phòng nêu bật
                </span>
            </div>
            <div className='home-container'>
                <i onClick={() => prevSlideImage()} className="fa-solid fa-chevron-left"></i>
                <img src={listSlideImage[position]} alt='' />
                <i onClick={() => nextSlideImage()} className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='separate'></div>
            <p>Các phòng trọ</p>
            <Rooms isHome={true} />
            <div className='separate'></div>
            {/* Danh sách rạp ở trang chủ thì hiện 3 phim */}
            {/* <Theaters isHome={true} />
            <div className='separate'></div> */}
        </div>
    )
}