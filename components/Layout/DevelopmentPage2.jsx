import React, { useState, useEffect } from 'react'
// Nextjs
import Head from 'next/head'
import Image from 'next/image';
// Image
import LogoBlack from '@/public/assets/img/logo-black-white.svg';
import LogoWhite from '@/public/assets/img/logo-white-yellow.svg';
import Icon from '../UI/Icon';

const DevelopmentPage2 = () => {
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {  // Set initial value
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
                    {/* {screenWidth > 480 ? (
                        <Image src={LogoWhite} alt='logo' style={{ width: '100px', height: 'auto' }} />
                    ) : (
                        <Image src={LogoBlack} alt='logo' style={{ width: '100px', height: 'auto' }} />
                    )} */}
                    <Icon />
                </div>
                <div className="maintenance-section2">
                    <div className="white-rec rec1">
                        <h1 >Online Soon</h1>
                    </div>
                    <div className="white-rec rec2">
                        <h1 >Online Soon</h1>
                    </div>
                    <div className="white-rec rec3">
                        <h1 className='flashing-text'>Online Soon</h1>
                    </div>
                    <div className="white-rec rec4">
                        <h1 >Online Soon</h1>
                    </div>
                    <div className="white-rec rec5">
                        <h1>Online Soon</h1>
                    </div>
                </div>
                <div className="credits-section credits-section-development">
                    <span>&#9400; {new Date().getFullYear()}</span><p style={{ fontSize: 0 }}>nophone</p><p>555 Live Experience</p>
                </div>
            </div>
        </>
    )
}

export default DevelopmentPage2
