//React
import React from 'react';
import { Suspense, useState, useEffect } from 'react'
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
// Helper
import { reorderWorks } from '@/helpers/works';

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
        works (first: 100) {
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
        clients (first: 100){
            nodes {
                clients {
                    title
                    clientLogoLight {
                        altText
                        mediaItemUrl
                    }
                    clientLogoDark {
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

    // Reorder works to place "Happiness Program" at the end
    const reorderedWorks = reorderWorks(works);

    // State to store screen width
    const [screenWidth, setScreenWidth] = useState(null);

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
            <div className="works-section">
                <div>
                    <h1 className='network-h1'>Our Works</h1>
                    <div className="works-list">
                        {
                            reorderedWorks.map((single) =>
                                <Suspense fallback={<Loader />} key={single.id}>
                                    <Work single={single} slug={data.page.slug} />
                                </Suspense>
                            )
                        }
                    </div>
                    <div className="selected-clients">
                        <p>Selected Clients</p>
                        <div className="selected-clients-logos">
                            {
                                [...clients].reverse().map((single, i) =>
                                    <Suspense fallback={<Loader />} key={i}>
                                        <div className='selected-clients-logos-image'>
                                            <Image src={screenWidth < 480 ? single.clients.clientLogoDark.mediaItemUrl : single.clients.clientLogoLight.mediaItemUrl} alt={screenWidth < 480 ? single.clients.clientLogoDark.altText : single.clients.clientLogoLight.altText} fill={true} />
                                        </div>
                                    </Suspense>
                                )
                            }
                        </div>
                    </div>
                </div>
                <Credits />
            </div>
        </>
    )
}
