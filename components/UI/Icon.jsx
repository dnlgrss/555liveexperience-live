import React, { useState, useEffect } from 'react'
//Nextjs
import Image from 'next/image'
import Link from 'next/link'
// Images
import LogoMobile from '@/public/assets/img/logo-black-white.svg'
import LogoMobileDev from '@/public/assets/img/logo-black-white.png'
import LogoDesktop from '@/public/assets/img/logo-white-yellow.svg'

const Icon = () => {
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        // Set initial value
        setScreenWidth(window.innerWidth);

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
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev' ?
                    <Image src={LogoMobileDev} alt='555 Live Experience Logo' className='logo' style={{ width: '100px', height: 'auto', margin: '0' }} />
                    :
                    <Image src={LogoMobile} alt='555 Live Experience Logo' className='logo' style={{ width: '80px', height: 'auto', margin: '10px 0 0 16px' }} />
            ) : (
                <Image src={LogoDesktop} alt='555 Live Experience Logo' className='logo' style={{ width: '80px', height: 'auto', margin: '10px 0 0 16px' }} />
            )}
        </Link>
    )
}

export default Icon
