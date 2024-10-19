import Image from 'next/image'
import photo from "../../photo/home.jpg"
import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Homepage = () => {
    return (
        <div className="bg-scroll"
            style={{
                backgroundImage: `url('/Aihome.png')`, height: "800px",
            }}>

        </div>
    )
}

export default Homepage;


