import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/UI/Loader'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/')
    }, [])

    return (
        <Loader />
    )
}

export default NotFound
