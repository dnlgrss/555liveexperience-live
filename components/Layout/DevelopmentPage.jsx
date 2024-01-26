import React, { useState, useEffect } from 'react'
// Nextjs
import Head from 'next/head'
import Image from 'next/image';
// Image
import LogoBlack from '@/public/assets/img/logo-black-white.png';
import LogoWhite from '@/public/assets/img/logo-white-yellow.png';

const DevelopmentPage = () => {
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
        <>
            <Head>
                <meta name="format-detection" content="telephone=no" />
                <title>555 Live Experience</title>
                <meta name="description" content="Live Events" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='development-page'>
                <div className="logo">
                    {screenWidth > 480 ? (
                        <Image src={LogoWhite} alt='logo' style={{ width: '100px', height: 'auto' }} />
                    ) : (
                        <Image src={LogoBlack} alt='logo' style={{ width: '100px', height: 'auto' }} />
                    )}
                </div>
                <div className="maintenance-section">
                    {/* fontSize adjusted for version2 */}
                    <h1 className='flashing-text' style={{ fontSize: '4rem' }}>Online Soon</h1>
                </div>
                <div className="credits-section">
                    <span>&#9400; {new Date().getFullYear()}</span><p style={{ fontSize: 0 }}>nophone</p><p>555 Live Experience</p>
                </div>
            </div>
        </>
    )
}

export default DevelopmentPage
