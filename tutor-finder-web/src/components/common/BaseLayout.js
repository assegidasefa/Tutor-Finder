import React from 'react'
import Footer from '../Home/Footer'
import Navbar from './Navbar/Navbar'

function BaseLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}

export default BaseLayout
