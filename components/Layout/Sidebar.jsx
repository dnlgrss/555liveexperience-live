import React from 'react'
import Link from 'next/link'
import Hamburger from '../UI/Hamburger'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="menu">
                <Link href="/why-us"><p className="menu-item">Why us?</p></Link>
                <Link href="/our-works"> <p className="menu-item" style={{ lineHeight: '55px' }}>Our <br /> Works</p></Link>
                <Link href="/our-network"><p className="menu-item shorter" style={{ lineHeight: '55px' }}>Our <br /> Network</p></Link>
                <Link href="/contacts"><p className="menu-item no-line">Contacts</p></Link>
            </div>
            <div className="social-media">
                <p className="follow-us">Follow us</p>
                <a href="https://www.linkedin.com/company/555-live-events/" className="social-link">Linkedin</a>
                <a href="https://www.instagram.com/555.live/" className="social-link">Instagram</a>
                <a href="https://vimeo.com/user214578179" className="social-link">Vimeo</a>
            </div>
        </div>
    )
}

export default Sidebar
