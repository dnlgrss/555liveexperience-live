import React, { useState, useEffect } from 'react'
//Nextjs
import Image from 'next/image'
import Link from 'next/link'
// Images
import LogoMobile from '@/public/assets/img/logo-black-yellow.png'
import LogoDesktop from '@/public/assets/img/logo-white-yellow.png'

const Icon = () => {
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect runs only on mount and unmount

    return (
        <Link href="/">
            {screenWidth < 480 ? (
                <Image src={LogoMobile} alt='555 Live Experience Logo' style={{ width: '100px', height: 'auto' }} />
            ) : (
                <Image src={LogoDesktop} alt='555 Live Experience Logo' style={{ width: '100px', height: 'auto' }} />
            )}
        </Link>
    )
}

export default Icon
