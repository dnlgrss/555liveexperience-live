import React, { useState, useEffect } from 'react'
// Nextjs
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader';

const Work = ({ single, slug }) => {
    // Initialize loading state to true to show the loader initially
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className='work-box'>
            <div className='work-box-image'>
                <Link href={`/${slug}/${single.slug}`}>
                    {/* Show loader when image is loading */}
                    {isLoading &&
                        <div className="loader-container" style={{ width: '100%', height: '450px' }}>
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
                </Link>
            </div>
            <Link href={`/${slug}/${single.slug}`} className='work-title'>
                {single.works.title}
            </Link>
        </div>
    )
}

export default Work
