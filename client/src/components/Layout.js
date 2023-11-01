import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <div className='app-wrapper'>
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}
