import React from 'react'
// Nextjs
import Link from 'next/link'
import Image from 'next/image'

const Work = ({ single, slug }) => {
    return (
        <div key={single.id} className='work-box'>
            <div className='work-box-image'>
                <Link href={`/${slug}/${single.slug}`}>
                    <Image src={single.works.featuredImage.mediaItemUrl} alt={single.works.featuredImage.altText} fill={true} />
                </Link>
            </div>
            <Link href={`/${slug}/${single.slug}`} className='work-title'>
                {single.works.title}
            </Link>
        </div>
    )
}

export default Work
