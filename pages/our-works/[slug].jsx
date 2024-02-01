import React from 'react'
// Nextjs
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'
//Components
import Header from '@/components/Layout/Header';
// Apollo
import { client } from '@/helpers/apollo';
import { gql } from '@apollo/client';
// Parser
import parse from 'html-react-parser';
import AccordionMenu from '@/components/UI/AccordionMenu';


import LogoDesktop from '@/public/assets/img/logo-white-yellow.png'
import Credits from '@/components/Layout/Credits';

export const getServerSideProps = async ({ params }) => {
    const { slug } = params
    const GET_PAGE = gql`
    query Event($id: ID!) {
        event(id: $id, idType: SLUG) {
            events {
                video
                title
                relatedWorks {
                    ... on Event {
                        id
                        slug
                        events {
                            title
                            featuredImage{
                            altText
                            mediaItemUrl
                            }
                        }
                    }
                }
                previousEvents {
                    ... on PreviousEvent {
                        id
                        previousEvents {
                            title
                            description
                            image1 {
                                altText
                                mediaItemUrl
                            }
                            image2 {
                                altText
                                mediaItemUrl
                            }
                            image3 {
                                altText
                                mediaItemUrl
                            }
                            image4 {
                                altText
                                mediaItemUrl
                            }
                        }
                    }
                }
                location
                intro2
                intro
                client
                date
                featuredImage{
                    altText
                    mediaItemUrl
                }
                headerPicture {
                    altText
                    mediaItemUrl
                }
                image1 {
                    altText
                    mediaItemUrl
                }
                image2 {
                    altText
                    mediaItemUrl
                }
                image3 {
                    altText
                    mediaItemUrl
                }
                image4 {
                    altText
                    mediaItemUrl
                }
            }
            slug
            seo {
                fullHead
                title
                metaDesc
            }
        }
    }
  `

    const res = await client.query({
        query: GET_PAGE,
        variables: {
            id: slug
        }
    })

    if (!res?.data?.event?.events) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    // if (!res?.data?.event?.events) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     }
    // }
    const data = res?.data

    return {
        props: {
            data
        }
    }
}

const single = ({ data }) => {
    const fullHead = typeof data?.event?.seo?.fullHead === "string" && parse(data?.event?.seo?.fullHead)

    const { events } = data?.event
    const { relatedWorks } = events
    const { previousEvents } = events

    return (
        <>
            <Head>{fullHead}</Head>
            <Header />
            {/* <div><pre>{JSON.stringify(data?.event?.seo?.fullHead, null, 2)}</pre></div> */}
            <div>Video: {JSON.stringify(events.video)}</div>
            <div>Title: {JSON.stringify(events.title)}</div>
            <div>Intro: {JSON.stringify(events.intro)}</div>
            <div>Intro 2: {JSON.stringify(events.intro2)}</div>
            <div>Client: {JSON.stringify(events.client)}</div>
            <div>Date: {JSON.stringify(events.date)}</div>
            {/* <div>Img 1: {JSON.stringify(events.image1.mediaItemUrl)}</div>
            <div>Img 1 Alt-text: {JSON.stringify(events.image1.altText)}</div>
            <div>Img 2: {JSON.stringify(events.image2.mediaItemUrl)}</div>
            <div>Img 2 Alt-text: {JSON.stringify(events.image2.altText)}</div>
            <div>Img 3: {JSON.stringify(events.image3.mediaItemUrl)}</div>
            <div>Img 3 Alt-text: {JSON.stringify(events.image3.altText)}</div>
            <div>Img 4: {JSON.stringify(events.image4.mediaItemUrl)}</div>
            <div>Img 4 Alt-text: {JSON.stringify(events.image4.altText)}</div> */}
            {/* <div>RELATED WORKS: ******* {JSON.stringify(relatedWorks)}</div>
            <div>PREVIOUS EVENTS: ******* {JSON.stringify(previousEvents)}</div> */}
            <h2>Previous Editions</h2>
            <AccordionMenu previousEvents={previousEvents} />
            <h2>Related Projects</h2>
            {relatedWorks.map(work => (
                <div className='related-projects'>
                    <div className='related-project'>
                        {/* <Link href={`/${slug}/${work.slug}`}> */}
                        <Link href={`/${work.slug}`}>
                            {/* <div>{work.featuredImage}</div> */}
                            <Image src={LogoDesktop} alt='555 Live Experience Logo' width={200} />
                        </Link>
                        {/* <div>{single.featuredImage}</div> */}
                        {/* <div>{single.featuredImage.node.mediaItemUrl}</div> */}
                        <Link href={`/${work.slug}`} className='work-title'>
                            {/* <Link href={`/${slug}/${work.slug}`} className='work-title'> */}
                            {work.events.title}
                        </Link>
                    </div>
                    <div className='related-project'>
                        {/* <Link href={`/${slug}/${work.slug}`}> */}
                        <Link href={`/${work.slug}`}>
                            {/* <div>{work.featuredImage}</div> */}
                            <Image src={LogoDesktop} alt='555 Live Experience Logo' width={200} />
                        </Link>
                        {/* <div>{single.featuredImage}</div> */}
                        {/* <div>{single.featuredImage.node.mediaItemUrl}</div> */}
                        <Link href={`/${work.slug}`} className='work-title'>
                            {/* <Link href={`/${slug}/${work.slug}`} className='work-title'> */}
                            {work.events.title}
                        </Link>
                    </div>
                </div>
            ))}
            <Credits />
        </>
    )
}

export default single
