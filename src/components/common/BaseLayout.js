import React from 'react'
import Footer from '../Home/Footer'
import Navbar from './Navbar/Navbar'
import Cardmater from "../Home/Cardmater"

function BaseLayout({children}) {
    return (
        <div>
            <Navbar />
            {children}
            <Cardmater/>
            <Footer />

        </div>
    )
}

export default BaseLayout
