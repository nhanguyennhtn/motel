import React from 'react'
import { useLocation } from 'react-router-dom'
import { apiRoomUpdate } from '../services'

function Rooms() {
    const room = useLocation().state
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    async function handleSubmit() {
        try {
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var today = new Date();

            const res = await apiRoomUpdate({ ...room, isOrdered: true })
            console.log(res);
            const data = { ...userInfo, ...room, ngay: today.toLocaleDateString("vi-VN", options) }
            console.log(data);
            // const res = await apiBillCreate(data)

        } catch (e) {
        }
    }

    return (
        <div className="movies-wrapper">
            Form thanh toan
            <button onClick={handleSubmit}>Thanh toan</button>
        </div>
    );
}

export default Rooms;