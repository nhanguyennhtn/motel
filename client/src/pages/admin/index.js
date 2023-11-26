import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { apiRoomRead, apiRoomDelete, apiBilltRead } from '../../services'

export default function Home() {
    const [rooms, setRooms] = useState([])
    const [bills, setBills] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const resRoom = await apiRoomRead()
        const resBill = await apiBilltRead()


        setBills(resBill.bills)
        setRooms(resRoom.rooms)
    }

    const renderfiveRows = () => {

        const lastIndexBills = bills.length
        const start = Math.max(0, lastIndexBills - 10)
        const lastFiveRowsBills = bills.slice(start, lastIndexBills)

        return (
            <div className='read'>
                <h1>Hóa đơn</h1>
                <table >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>fullname</th>
                            <th>name</th>
                            <th>email</th>
                            <th>Số Phòng</th>
                            <th>giá</th>
                            <th>ngày đặt</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastFiveRowsBills.length > 0 ? lastFiveRowsBills.map((item, index) =>
                            <tr key={item._id}>
                                <td>{++index}</td>
                                <td>{item.fullname}</td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.sophong}</td>
                                <td>{Intl.NumberFormat('vi-VN').format(item.gia)} vnđ</td>
                                <td>{item.ngay}</td>
                                <td>
                                    <Link to='/admin/bills'><i className="fa-solid fa-trash btn-delete"></i></Link>
                                    {/* <i onClick={() => deleteBill(item._id)} className="fa-solid fa-trash btn-delete"></i> */}
                                </td>
                            </tr>
                        ) :
                            <tr>
                                <td colSpan='8'>Không có dữ liệu</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    console.log(renderfiveRows);
    const deleteRoom = async id => {
        if (window.confirm("Would you like to remove?")) {
            await apiRoomDelete(id)
            fetchData()
        }
    }




    return (
        <div className='read'>
            <h1>Phòng</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>số Phòng</th>
                        <th>ảnh</th>
                        <th>kích thước</th>
                        <th>mô tả</th>
                        <th>giá</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.length > 0 ? rooms.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.sophong}</td>
                            <td>
                                <img src={item.anh} alt='' />
                            </td>
                            <td>{item.kichthuoc}</td>
                            <td><ReactQuill value={item.mota} readOnly={true} theme="bubble" /></td>
                            <td>{Intl.NumberFormat('vi-VN').format(item.gia)} vnđ</td>
                            <td>
                                <Link to='/admin/room/update' state={item}>
                                    <i className="fa-solid fa-pen btn-edit"></i>
                                </Link>
                            </td>
                            <td>
                                <i onClick={() => deleteRoom(item._id)} className="fa-solid fa-trash btn-delete"></i>
                            </td>
                        </tr>
                    ) :
                        <tr>
                            <td colSpan='8'>Không có dữ liệu</td>
                        </tr>
                    }
                </tbody>
            </table>
            {renderfiveRows()}
        </div>
    )
}