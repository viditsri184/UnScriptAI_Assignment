import React from 'react'
import Navbar from '../components/Navbar'
import Headers from '../components/Headers'
import VideoComponent from '../components/VideoComponent'
import Partners from '../components/Partners'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

const Landing = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <VideoComponent />
            <Partners />
            <Feature />
            <Footer />
        </>
    )
}

export default Landing
