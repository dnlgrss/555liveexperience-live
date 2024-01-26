import React, { useState } from 'react'
// Components
import Icon from '@/components/UI/Icon'
import Hamburger from '@/components/UI/Hamburger';
import Sidebar from '@/components/Layout/Sidebar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <Icon />
            <Hamburger onClick={toggleSidebar} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
        </div>
    )
}

export default Header
