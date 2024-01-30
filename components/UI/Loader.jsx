import React from 'react'
import LoaderIcon from '@/public/assets/img/loader.svg'
import Image from 'next/image'

const Loader = () => {
    return (
        <div className='loader'>
            <Image src={LoaderIcon} alt='loader' />
        </div>
    )
}

export default Loader
