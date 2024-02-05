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
    console.log(slug);
    const GET_PAGE = gql`
    query Event($id: ID!) {
        work(id: $id, idType: SLUG) {
            works {
                video
                title
                relatedWorks {
                    ... on Work {
                        id
                        slug
                        works {
                            title
                            featuredImage{
                            altText
                            mediaItemUrl
                            }
                        }
                    }
                }
                previousWorks {
                    ... on PreviousWork {
                        id
                        previousWorks {
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
                category
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

    if (!res?.data?.work?.works) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const data = res?.data

    return {
        props: {
            data
        }
    }
}

const single = ({ data }) => {
    const seo = data?.work?.seo
    const { works } = data?.work
    const { relatedWorks } = works
    const { previousWorks } = works

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.metaDesc} />
                <link rel="icon" href="/favicon.ico" />
                {parse(seo.fullHead)}</Head>
            <Header />
            {/* <div><pre>{JSON.stringify(data?.event?.seo?.fullHead, null, 2)}</pre></div> */}
            <div>Video: {JSON.stringify(works.video)}</div>
            <div>Title: {JSON.stringify(works.title)}</div>
            <div>Intro: {JSON.stringify(works.intro)}</div>
            <div>Intro 2: {JSON.stringify(works.intro2)}</div>
            <div>Client: {JSON.stringify(works.category)}</div>
            <div>Client: {JSON.stringify(works.client)}</div>
            <div>Date: {JSON.stringify(works.date)}</div>
            <div>Date: {JSON.stringify(works.location)}</div>
            {/* <div>Img 1: {JSON.stringify(works.image1.mediaItemUrl)}</div>
            <div>Img 1 Alt-text: {JSON.stringify(works.image1.altText)}</div>
            <div>Img 2: {JSON.stringify(works.image2.mediaItemUrl)}</div>
            <div>Img 2 Alt-text: {JSON.stringify(works.image2.altText)}</div>
            <div>Img 3: {JSON.stringify(works.image3.mediaItemUrl)}</div>
            <div>Img 3 Alt-text: {JSON.stringify(works.image3.altText)}</div>
            <div>Img 4: {JSON.stringify(works.image4.mediaItemUrl)}</div>
            <div>Img 4 Alt-text: {JSON.stringify(works.image4.altText)}</div> */}
            {/* <div>RELATED WORKS: ******* {JSON.stringify(relatedWorks)}</div>
            <div>PREVIOUS works: ******* {JSON.stringify(previousWorks)}</div> */}
            {!!previousWorks && <h2>Previous Editions</h2>}
            {!!previousWorks && <AccordionMenu previousWorks={previousWorks} />}
            {!!relatedWorks && <h2>Related Projects</h2>}
            {!!relatedWorks && relatedWorks.map(work => (
                <div className='related-projects'>
                    <div className='related-project'>
                        <Link href={`${work.slug}`}>
                            <Image src={work.works.featuredImage.mediaItemUrl} alt={work.works.featuredImage.altText} width={150} height={150} />
                        </Link>
                        <Link href={`${work.slug}`} className='work-title'>
                            {work.works.title}
                        </Link>
                    </div>
                </div>
            ))}
            <Credits />
        </>
    )
}

export default single
