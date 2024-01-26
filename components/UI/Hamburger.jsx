import React from 'react'

const Hamburger = ({ onClick, isOpen }) => {
    return (
        <div className="hamburger-menu" onClick={onClick}>
            <span className={`line ${isOpen ? 'hidden' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'hidden' : ''}`}></span>
        </div>
    )
}

export default Hamburger
