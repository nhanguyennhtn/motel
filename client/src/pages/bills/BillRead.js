import React, { useEffect, useState } from 'react'
import { apiBilltRead, apiBillDelete } from '../../services'

function Bills() {
    const [bills, setBills] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(10)

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

    const totalTablePages = Math.ceil(bills.length / rowsPerPage)
    const pages = [];
    for (let i = 1; i <= totalTablePages; i++) {
        pages.push(i);
    }
    const goToPage = (page) => {
        setCurrentPage(page);
    };
    const currentRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const lastBills = bills.slice(startIndex, endIndex);
        return lastBills
    };
    const nextPage = () => {
        if (currentPage < totalTablePages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevtPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
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
                        <th>email</th>
                        <th>Số Phòng</th>
                        <th>giá</th>
                        <th>ngày đặt</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows().length > 0 ? currentRows().filter((item) => {
                        return searchTerm.toLowerCase() === '' ? item : item.fullname.toLowerCase().includes(searchTerm)
                    }).map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.fullname}</td>
                            <td>{item.email}</td>
                            <td>{item.sophong}</td>
                            <td>{Intl.NumberFormat('vi-VN').format(item.gia)} vnđ</td>
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
            <div className='btn-table-page'>
                <button onClick={prevtPage} disabled={currentPage === 1}> Prev </button>
                <ul>
                    {pages.map((page) => (
                        <li key={page}>
                            <button onClick={() => goToPage(page)}>{page}</button>
                        </li>
                    ))}
                </ul>
                <button onClick={nextPage} disabled={currentPage === totalTablePages}> Next </button>
            </div>

        </div>
    );
}

export default Bills;