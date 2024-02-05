//React
import React from 'react';
import { Suspense } from 'react'
//Nextjs
import Head from 'next/head';
import Image from 'next/image'
//Components
import Work from '@/components/UI/Work';
import Loader from '@/components/UI/Loader';
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
        works {
            nodes {
                id
                slug
                works{
                    title
                    featuredImage {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
        clients {
            nodes {
                clients {
                    title
                    clientLogo {
                        altText
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
    const seo = data?.page?.seo
    const works = data.works.nodes
    const clients = data?.clients?.nodes

    // const selectedClients = [LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop, LogoDesktop]

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <link rel="icon" href="/favicon.ico" />
                {parse(seo.fullHead)}
            </Head>
            <Header />
            <h1 className='network-h1'>Our Works</h1>
            <div className="works-list">
                {
                    works.map((single) =>
                        <Suspense fallback={<Loader />}>
                            <Work single={single} slug={data.page.slug} key={single.id} />
                        </Suspense>
                    )
                }
            </div>
            <div className="selected-clients">
                <p>Selected Clients</p>
                <div className="selected-clients-logos">
                    {
                        clients.map((single, i) =>
                            <Suspense fallback={<Loader />}>
                                <div className='selected-clients-logos-image'>
                                    <Image src={single.clients.clientLogo.mediaItemUrl} alt={single.clients.clientLogo.altText} width={100} height={30} style={{ width: '100px', height: 'auto', objectFit: 'contain' }} key={i} />
                                </div>
                            </Suspense>
                        )
                    }
                </div>
            </div>
            <Credits />
        </>
    )
}
