import React from 'react'
// Nextjs
import Link from 'next/link'
import Image from 'next/image'

import LogoDesktop from '@/public/assets/img/logo-white-yellow.png'

const Work = ({ single, slug }) => {
    return (
        <div key={single.id} className='work-box'>
            <Link href={`/${slug}/${single.slug}`}>
                <Image src={LogoDesktop} alt='555 Live Experience Logo' />
            </Link>
            {/* <div>{single.featuredImage}</div> */}
            {/* <div>{single.featuredImage.node.mediaItemUrl}</div> */}
            <Link href={`/${slug}/${single.slug}`} className='work-title'>
                {single.works.title}
            </Link>
        </div>
    )
}

export default Work
