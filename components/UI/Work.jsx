import React, { useState, useEffect } from 'react'
// Nextjs
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader';

const Work = ({ single, slug }) => {
    // Initialize loading state to true to show the loader initially
    const [isLoading, setIsLoading] = useState(true);
    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);
    // Handle image display
    const [hideImage, setHideImage] = useState(false);

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
        <div className='work-box'>
            <div className='work-box-image'>
                <Link href={`/${slug}/${single.slug}`}>
                    {/* Show loader when image is loading */}
                    {isLoading &&
                        <div className="loader-container" style={{ width: '100%', height: '100%' }}>
                            <Loader />
                        </div>
                    }
                    <Image
                        src={single.works.featuredImage.mediaItemUrl}
                        alt={single.works.featuredImage.altText}
                        fill={true}
                        onLoadingComplete={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)} // Hide loader on error as well
                    />
                    {/* Render badge image if badge exists */}
                    {!!single.works.badge && !hideImage ? (
                        <div className="badge">
                            <Image
                                src={`/assets/img/badge/${screenWidth < 480 ? `${single.works.badge}_white` : `${single.works.badge}_white`}.svg`}
                                alt={`Sporting Event Award Badge`}
                                width={screenWidth < 480 ? 150 : 150} // Customize badge size
                                height={screenWidth < 480 ? 55 : 55}
                                // onLoadingComplete={() => setIsLoading(false)}
                                onError={() => setHideImage(true)} // Hide loader on error as well
                            />
                        </div>
                    ) :
                        null
                    }
                </Link>
            </div>
            <Link href={`/${slug}/${single.slug}`} className='work-title'>
                {single.works.title}
            </Link>
        </div>
    )
}

export default Work
