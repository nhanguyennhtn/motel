import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { apiContactDelete, apiContactRead, apiContractCreate } from '../../../services'

function Contacts() {
    const [contacts, setContacts] = useState([])
    
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
            fetchData()
        }
    }

    return (
        <div className='read'>
            <Link to='/admin/room/create'>Create</Link>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Phòng Số</th>
                        <th>mess</th>
                        <th>ngày lập</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? contacts.map((item, index) =>
                        <tr key={item._id}>
                            <td>{++index}</td>
                            <td>{item.username}</td>
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