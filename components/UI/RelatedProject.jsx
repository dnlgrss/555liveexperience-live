import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Assuming you have this imported as well
import Loader from './Loader';

const RelatedProject = ({ work }) => {
    // State to track image loading
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className='related-box'>
            <div className='related-project'>
                <Link href={`${work.slug}`}>
                    {/* Show loader when image is loading */}
                    {isLoading &&
                        <div className="loader-container" style={{ width: '100%', height: '100%' }}>
                            <Loader />
                        </div>
                    }
                    <Image
                        src={work.works.featuredImage.mediaItemUrl}
                        alt={work.works.featuredImage.altText}
                        fill={true}
                        onLoadingComplete={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)} // Hide loader on error as well
                    />
                </Link>
            </div>
            <Link href={`${work.slug}`} className='related-title'>
                {work.works.shortTitle}
            </Link>
        </div>
    );
};

export default RelatedProject;
