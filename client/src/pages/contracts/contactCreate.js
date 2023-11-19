import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { apiContactCreate } from '../../services'

function Contacts() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();

    const [mess, setMess] = useState()
    const [sophong, setRoom] = useState()

    async function test() {
        try {
            if (userInfo) {
                const data = { mess: mess, name: userInfo.fullname, sophong: sophong, ngay: today.toLocaleDateString("vi-VN", options) }
                await apiContactCreate(data)
                alert('Đã ghi nhận phản hồi')
                console.log(data);
            }
        } catch (e) {
        }
    }

    return (
        <div className='bill-wrapper'>
            <div className='item-waper'>
                <form>
                    <div className='title-bill'>
                        <h2>Phản hồi</h2>
                    </div>
                    <div className='conent-bill'>
                        {userInfo.fullname}
                    </div>
                    <div className='select-bill'>
                        <select id='select' value={sophong} onChange={e => setRoom(e.target.value)} required>
                            <option value=''>--chọn phòng--</option>
                            <option value='A0001'>A0001</option>
                            <option value='A0002'>A0002</option>
                            <option value='A0003'>A0003</option>
                            <option value='A0004'>A0004</option>
                            <option value='A0005'>A0005</option>
                            <option value='A0006'>A0006</option>
                            <option value='A0007'>A0007</option>
                            <option value='A0008'>A0008</option>
                        </select>
                    </div>

                    <ReactQuill theme="snow" value={mess} onChange={setMess} placeholder='nhập thông tin phản hồi...' required/>

                    <div className='item-wrapper'>
                        <button onClick={() => test()}>Phản hồi</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;