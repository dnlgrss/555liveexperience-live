//React
import React from 'react';
import { Suspense } from 'react'
//Nextjs
import Head from 'next/head';
import Image from 'next/image'
//Components
import Work from '@/components/UI/Work';
// Font
import { Inter } from 'next/font/google'
// Apollo
import { client } from '@/helpers/apollo';
import { gql } from '@apollo/client';
// Parser
import parse from 'html-react-parser';
import Header from '@/components/Layout/Header';
import Credits from '@/components/Layout/Credits';

import LogoDesktop from '@/public/assets/img/logo-white-yellow.png'
import Loader from '@/components/UI/Loader';

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {
    // Fetching SEO page
    const GET_PAGE = gql`
    query fecthPageSEO($id: ID = "our-works") {
        page(id: $id, idType: URI) {
            slug
            title
            content
            seo{
                metaDesc
                fullHead
                title
            }
        }
        events {
            nodes {
                id
                title
                slug
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    }
  `
    const res = await client.query({
        query: GET_PAGE
    })
    // const data = res.data.page
    const data = res.data

    return {
        props: {
            data
        }
    }
}

export default function ourWorks({ data }) {
    const fullHead = parse(data?.page?.seo?.fullHead)
    const events = data.events.nodes

    const selectedClients = [LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop]

    return (
        <>
            <Head>{fullHead}</Head>
            <Header />
            <h1 className='network-h1'>Our Works</h1>
            <div className="works-list">
                {
                    events.map((single) =>
                        <Suspense fallback={<Loader />}>
                            <Work single={single} slug={data.page.slug} key={single.id} />
                        </Suspense>
                    )
                }
            </div>
            <div className="selected-clients">
                <p>Selected Clients</p>
                {
                    selectedClients.map((single, i) =>
                        <Suspense fallback={<Loader />}>
                            <Image src={single} alt='555 Live Experience Logo' style={{ width: '100px', height: 'auto' }} key={i} />
                        </Suspense>
                    )
                }
            </div>
            <Credits />
        </>
    )
}
