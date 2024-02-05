import React from 'react'
import Link from 'next/link'
import Hamburger from '../UI/Hamburger'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="menu">
                <Link href="/why-us"><p className="menu-item">Why us?</p></Link>
                <Link href="/our-works"> <p className="menu-item" style={{ lineHeight: '65px' }}>Our <br /> Works</p></Link>
                <Link href="/our-network"><p className="menu-item shorter" style={{ lineHeight: '65px' }}>Our <br /> Network</p></Link>
                <Link href="/contacts"><p className="menu-item no-line">Contacts</p></Link>
            </div>
            <div className="social-media">
                <p className="follow-us">Follow us</p>
                <a href="https://www.linkedin.com" className="social-link">Linkedin</a>
                <a href="https://www.instagram.com" className="social-link">Instagram</a>
                <a href="https://www.vimeo.com" className="social-link">Vimeo</a>
            </div>
        </div>
    )
}

export default Sidebar
