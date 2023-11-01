import React from 'react'
import { NavLink} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='top-list'>
                        <div className='title'>The Motel</div>
                        <div className='item'>
                            <NavLink to='./room'>
                                Phòng trọ
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to='./service'>
                                Dịch vụ
                            </NavLink>
                        </div>
                    </div>
                    <div className='top-list'>
                        <div className='title'>Liên hệ</div>
                        <div className='item'>
                            <i className="fa-solid fa-envelope"></i>
                            Email: troabc@example.vn
                        </div>
                        <div className='item'>
                            <i className="fa-solid fa-phone"></i>
                            Hotline: -39 698 4478
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    @2023 The Motel. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;