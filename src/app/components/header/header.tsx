import React from "react"
import Link from "next/link"


const Homepage = () => {

    return (

        <div style={{
            display: "block",
            textAlign: "center",
            backgroundColor: "deepskyblue",
            fontSize: '30px',
            fontFamily: 'arial',
            textDecoration: 'none',
            margin: '0px',
            gap: '30px',
            paddingTop: '0',
            padding: "1rem",
            borderBlockStyle: "double",
            paddingLeft: "30px",
            paddingRight: "30px",







        }}>
            <ul>
                <Link href="/home">Home  </Link>
                <Link href="/about-us">About  </Link>
                <Link href="/product">Product  </Link>
                <Link href="/contact-us">Contact  </Link>
            </ul>
        </div>
    )
}
export default Homepage;

