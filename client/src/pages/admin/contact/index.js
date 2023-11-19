import React, { useState, useEffect } from 'react'
import { apiContactDelete, apiContactRead} from '../../../services'

function Contacts() {
    const [contacts, setContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiContactRead()
        setContacts(res.contacts)
    }

    const deleteContact = async id => {
        if (window.confirm("Would you like to remove?")) {
            await apiContactDelete(id)
            console.log(id, 'lllllllllll');
            fetchData()
        }
    }

    return (
        <div className='read'>
            <input id='search' onChange={e => setSearchTerm(e.target.value)} placeholder="Tìm kiếm theo sophong..." />
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Phòng Số</th>
                        <th>mess</th>
                        <th>ngày lập</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? contacts.filter((item)=> {
                        return searchTerm.toLowerCase() === ''? item : item.sophong.toLowerCase().includes(searchTerm)
                    }).map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.name}</td>
                            <td>{item.sophong}</td>
                            <td>{item.mess}</td>
                            <td>{item.ngay}</td>
                            <td>
                                <i onClick={() => deleteContact(item._id)} className="fa-solid fa-trash btn-delete"></i>
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

export default Contacts;