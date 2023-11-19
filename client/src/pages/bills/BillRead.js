import React, { useEffect, useState } from 'react'
import { apiBilltRead, apiBillDelete } from '../../services'

function Bills() {
        const [bills, setBills] = useState([])
        const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiBilltRead()
        setBills(res.bills)
    }

    const deleteBill = async id => {
        console.log(id);
        if (window.confirm("Khi xóa sẽ không khôi phục được, bạn chắc chắn?")) {
            await apiBillDelete(id)
            console.log(id);
            fetchData()
        }
    }

    return (
        <div className='read'>
                <input id='search' onChange={e => setSearchTerm(e.target.value)} placeholder="Tìm kiếm theo tên..." />
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
                    {bills.length > 0 ? bills.filter((item)=> {
                        return searchTerm.toLowerCase() === ''? item : item.fullname.toLowerCase().includes(searchTerm)
                    }).map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.fullname}</td>
                            <td>
                                {item.name}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.sophong}</td>
                            <td>{item.gia}</td>
                            <td>{item.ngay}</td>
                            <td>
                                <i onClick={() => deleteBill(item._id)} className="fa-solid fa-trash btn-delete"></i>
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
    );
}

export default Bills;