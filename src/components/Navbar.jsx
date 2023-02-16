import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar--nav">
        <img src="/public/assets/globe.png" alt="globe icon" className="navbar--icon" />
        <p className="navbar--title">journeys abroad | <span className="navbar--subtitle">a travel journal by reginald wong</span> </p>   
        </nav>
    )
}

export default Navbar;