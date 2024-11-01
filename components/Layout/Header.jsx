import React, { useEffect, useState } from 'react'
// Components
import Icon from '@/components/UI/Icon'
import Hamburger from '@/components/UI/Hamburger';
import Sidebar from '@/components/Layout/Sidebar';
import DesktopMenu from './DesktopMenu';

const Header = ({ isHome }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);

        // const newState = !isOpen;
        // setIsOpen(newState);

    };

    useEffect(() => {
        if (isOpen) {
            // Add the no-scroll class to the body when the sidebar is open
            document.body.classList.add('no-scroll');
        } else {
            // Remove the no-scroll class from the body when the sidebar is closed
            document.body.classList.remove('no-scroll');
        }
    })

    // useEffect(() => {
    //     toggleSidebar()
    // })

    return (
        <>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Hamburger onClick={toggleSidebar} isOpen={isOpen} />
            <div className="header transparent" style={{
                background: `${isHome && 'transparent'}`,
                position: 'fixed',
            }}>
                <Icon />
                <DesktopMenu /> {/* Include the DesktopMenu component */}
            </div>
        </>
    )
}

export default Header
