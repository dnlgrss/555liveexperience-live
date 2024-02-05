import React, { useEffect, useState } from 'react'
// Components
import Icon from '@/components/UI/Icon'
import Hamburger from '@/components/UI/Hamburger';
import Sidebar from '@/components/Layout/Sidebar';
import DesktopMenu from './DesktopMenu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        // setIsOpen(!isOpen);

        const newState = !isOpen;
        setIsOpen(newState);

        if (newState) {
            // Add the no-scroll class to the body when the sidebar is open
            document.body.classList.add('no-scroll');
        } else {
            // Remove the no-scroll class from the body when the sidebar is closed
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <Sidebar isOpen={isOpen} />
            <div className="header">
                <Icon />
                <Hamburger onClick={toggleSidebar} isOpen={isOpen} />
                <DesktopMenu /> {/* Include the DesktopMenu component */}
            </div>
        </>
    )
}

export default Header
